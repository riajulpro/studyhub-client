import { useLoaderData } from "react-router-dom";

const AssignmentDetails = () => {
  const assignmentDetails = useLoaderData();
  console.log(assignmentDetails);

  return (
    <div className="md:w-9/12 mx-auto my-5 border rounded-md p-3">
      {assignmentDetails.map((data) => (
        <div key={data._id}>
          <h1 className="font-bold text-2xl">{data?.title}</h1>
          <p>{data?.description}</p>
          <p>{data?.level}</p>
          <p>{data?.dueDate}</p>
          <p>{data?.userEmail}</p>
          <p>
            <button className="bg-violet-400 text-white px-3 py-1 mr-1 hover:bg-violet-300 active:scale-95 rounded">
              Take the Assignment
            </button>
          </p>
        </div>
      ))}
    </div>
  );
};

export default AssignmentDetails;
