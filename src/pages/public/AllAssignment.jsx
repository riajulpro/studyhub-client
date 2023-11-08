import { Link, useLoaderData } from "react-router-dom";
// import useAssignments from "../../hooks/useAssignments";
import Loading from "../../components/Loading/Loading";
import { useContext, useState } from "react";
import axios from "axios";
import useAssignments from "../../hooks/useAssignments";
import { AuthContext } from "../../context/Authentication";
import Swal from "sweetalert2";
import useFilter from "../../hooks/useFilter";
import { Helmet } from "react-helmet";

const AllAssignment = () => {
  const { count } = useLoaderData();
  const { user } = useContext(AuthContext);
  const item = 9;
  const pages = [...Array(Math.ceil(count / item)).keys()];
  const [currentPage, setCurrentPage] = useState(0);
  const [filter, setFilter] = useState("");

  const {
    data: assignments,
    isLoading,
    refetch,
  } = useAssignments(currentPage, item);

  const { data: filteredData, isLoading: filterLoading } = useFilter();

  const toShow = !filter
    ? assignments
    : filteredData.filter((data) => data.level === filter);

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  const deleteAnItem = (id, email) => {
    if (!user) {
      Swal.fire({
        title: "Warning!",
        text: "You must login to delete file",
        icon: "warning",
      });
    } else if (user.email === email) {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then((result) => {
        if (result.isConfirmed) {
          axios
            .delete(`https://rp-assignment-11.vercel.app/assignments/${id}`)
            .then((res) => {
              if (res.data?.deletedCount > 0) {
                Swal.fire({
                  title: "Deleted!",
                  text: "Your file has been deleted.",
                  icon: "success",
                });
                refetch();
              }
            });
        }
      });
    } else {
      Swal.fire({
        position: "top-end",
        icon: "error",
        title: "You have not access to delete the assignment.",
        showConfirmButton: false,
        timer: 1750,
      });
    }
  };

  if (isLoading || filterLoading) {
    return (
      <div className="h-[calc(100vh-100px)] flex justify-center items-center">
        <Loading className="w-96 h-96" />
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>All Assignments</title>
      </Helmet>
      <div className="md:w-9/12 mx-auto flex items-center justify-end my-5">
        <span className="font-bold mr-2">Filter By: </span>
        <select
          value={filter}
          onChange={handleFilterChange}
          className="border p-1"
        >
          <option value="">All</option>
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="hard">Hard</option>
        </select>
      </div>
      <div className="md:w-9/12 mx-auto grid gap-2 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {toShow?.map((ass) => (
          <div key={ass._id} className="bg-gray-100 rounded-md p-2">
            <p>
              <img src={ass?.thumbnail} alt="" className="rounded-md" />
            </p>
            <h1 className="font-bold text-lg">{ass?.title}</h1>
            <p className="text-sm">Marks: {ass?.marks}</p>
            <p className="text-sm mb-2 border-b">Level: {ass?.level}</p>
            <p className="flex justify-end">
              <Link
                to={`/assignment-details/${ass._id}`}
                className="bg-primary text-white px-3 py-1 mr-1 hover:bg-violet-300 active:scale-95 rounded"
              >
                View
              </Link>
              <Link
                to={`/update-assignment/${ass._id}`}
                className="bg-primary text-white px-3 py-1 mr-1 hover:bg-violet-300 active:scale-95 rounded"
              >
                Edit
              </Link>
              <button
                className="bg-primary text-white px-3 py-1 mr-1 hover:bg-violet-300 active:scale-95 rounded"
                onClick={() => deleteAnItem(ass?._id, ass?.userEmail)}
              >
                Delete
              </button>
            </p>
          </div>
        ))}
      </div>

      {!filter && (
        <>
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
      )}
    </>
  );
};

export default AllAssignment;
