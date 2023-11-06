import { Link } from "react-router-dom";
import useAssignments from "../../hooks/useAssignments";
import Loading from "../../components/Loading/Loading";

const AllAssignment = () => {
  const { data: assignments, isLoading, isFetching } = useAssignments();
  console.log(assignments, isLoading, isFetching);

  if (isLoading) {
    return (
      <div className="h-[calc(100vh-100px)] flex justify-center items-center">
        <Loading className="w-96 h-96" />
      </div>
    );
  }

  return (
    <div>
      <div className="md:w-9/12 mx-auto grid gap-2 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-5">
        {assignments?.map((ass) => (
          <div key={ass._id} className="bg-gray-100 rounded-md p-2">
            <h1 className="font-bold text-lg">{ass?.title}</h1>
            <p className="mb-2 border-b">{ass?.description}</p>
            <p className="flex justify-end">
              <Link
                to={`/assignment-details/${ass._id}`}
                className="bg-violet-400 text-white px-3 py-1 mr-1 hover:bg-violet-300 active:scale-95 rounded"
              >
                View
              </Link>
              <Link
                to={`/update-assignment/${ass._id}`}
                className="bg-violet-400 text-white px-3 py-1 mr-1 hover:bg-violet-300 active:scale-95 rounded"
              >
                Edit
              </Link>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllAssignment;
