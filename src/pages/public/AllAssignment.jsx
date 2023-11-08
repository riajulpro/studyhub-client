import { Link, useLoaderData } from "react-router-dom";
// import useAssignments from "../../hooks/useAssignments";
import Loading from "../../components/Loading/Loading";
import { useState } from "react";
import axios from "axios";
import useAssignments from "../../hooks/useAssignments";

const AllAssignment = () => {
  const { count } = useLoaderData();
  const item = 9;
  const pages = [...Array(Math.ceil(count / item)).keys()];
  const [currentPage, setCurrentPage] = useState(0);

  const {
    data: assignments,
    isLoading,
    refetch,
  } = useAssignments(currentPage, item);

  const deleteAnItem = (id) => {
    axios.delete(`http://localhost:5000/assignments/${id}`).then((res) => {
      if (res.data?.deletedCount > 0) {
        alert("Successfully deleted");
        refetch();
      }
    });
  };

  // const { data: assignments, isLoading, refetch } = useAssignments();

  if (isLoading) {
    return (
      <div className="h-[calc(100vh-100px)] flex justify-center items-center">
        <Loading className="w-96 h-96" />
      </div>
    );
  }

  return (
    <>
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
              <button
                className="bg-violet-400 text-white px-3 py-1 mr-1 hover:bg-violet-300 active:scale-95 rounded"
                onClick={() => deleteAnItem(ass._id)}
              >
                Delete
              </button>
            </p>
          </div>
        ))}
      </div>

      <div className="flex justify-center my-5">
        <div>
          <button
            className="bg-gray-100 p-2 border-r"
            onClick={() => {
              if (currentPage > 0) {
                setCurrentPage(currentPage - 1);
              }
            }}
          >
            Prev
          </button>
          {pages.map((page) => (
            <button
              key={page}
              className={
                currentPage === page
                  ? "bg-orange-400 text-white p-2 border-r"
                  : "bg-gray-100 p-2 border-r"
              }
              onClick={() => {
                setCurrentPage(page);
              }}
            >
              {page}
            </button>
          ))}
          <button
            className="bg-gray-100 p-2 border-r"
            onClick={() => {
              if (currentPage < pages.length - 1) {
                setCurrentPage(currentPage + 1);
              }
            }}
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
};

export default AllAssignment;
