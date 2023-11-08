import axios from "axios";
import { useState } from "react";
import { Link, useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../context/Authentication";
import { Helmet } from "react-helmet";

const UpdateAssignment = () => {
  const previousData = useLoaderData();
  const navigate = useNavigate();
  const { user } = useState(AuthContext);

  const {
    _id,
    title,
    thumbnail,
    description,
    marks,
    level,
    dueDate,
    userEmail,
  } = previousData[0];

  const updateAssignment = (event) => {
    event.preventDefault();
    console.log("assignment updated successfully");

    const form = event.target;
    const title = form.title.value;
    const thumbnail = form.thumbnail.value;
    const description = form.description.value;
    const marks = form.marks.value;
    const level = form.level.value;
    const dueDate = form.dueDate.value;

    const updatedData = {
      title,
      thumbnail,
      description,
      marks,
      level,
      dueDate,
    };

    if (user?.email === userEmail) {
      Swal.fire({
        title: "Do you want to update the changes?",
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: "Update",
        denyButtonText: `Don't update`,
      }).then((result) => {
        if (result.isConfirmed) {
          axios
            .put(
              `https://rp-assignment-11.vercel.app/assignment/${_id}`,
              updatedData
            )
            .then((res) => {
              if (res.data.modifiedCount > 0) {
                Swal.fire("Assignment Successfully Updated!", "", "success");
                navigate("/all-assignment");
              }
            });
        } else if (result.isDenied) {
          Swal.fire("Changes are not updated", "", "info");
        }
      });
    } else {
      Swal.fire({
        position: "top-end",
        icon: "warning",
        title: "You haven't the permission to update this.",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  return (
    <>
      <Helmet>
        <title>Update Assignment</title>
      </Helmet>
      <div className="bg-gray-100 h-[calc(100vh-100px)] flex justify-center items-center">
        <div className="w-11/12 md:w-1/2 mx-auto rounded-md shadow-md p-3 bg-white">
          <h1 className="text-xl md:text-3xl font-bold mb-5">
            Update the Assignment
          </h1>
          <form onSubmit={updateAssignment}>
            <div className="flex flex-col md:flex-row gap-2">
              <label htmlFor="title" className="w-full">
                Title:
                <input
                  type="text"
                  name="title"
                  id="title"
                  className="p-1 w-full border"
                  placeholder="Enter title"
                  defaultValue={title}
                />
              </label>
              <label htmlFor="thumbnail" className="w-full">
                Thumbnail Image URL:
                <input
                  type="text"
                  name="thumbnail"
                  id="thumbnail"
                  className="p-1 w-full border"
                  placeholder="https://thumbnail-url.com/enter.jpg"
                  defaultValue={thumbnail}
                />
              </label>
            </div>
            <div>
              <label htmlFor="description" className="w-full">
                Description:
                <textarea
                  name="description"
                  id="description"
                  rows="5"
                  className="border w-full p-1 my-1"
                  placeholder="Write description here"
                  defaultValue={description}
                ></textarea>
              </label>
            </div>
            <div className="flex flex-col md:flex-row gap-2">
              <input
                type="text"
                name="marks"
                className="border flex-1 p-1"
                placeholder="Marks"
                defaultValue={marks}
              />
              <select
                name="level"
                className="border flex-1 p-1"
                defaultValue={level}
              >
                <option value="easy">Easy</option>
                <option value="medium">Medium</option>
                <option value="hard">Hard</option>
              </select>
              <input
                type="date"
                name="dueDate"
                className="border flex-1 p-1"
                defaultValue={dueDate}
              />
            </div>
            <div className="flex justify-between md:justify-end gap-2">
              <Link
                to={"/"}
                className="border py-2 px-10 mt-2 bg-red-600 text-white hover:bg-red-400 cursor-pointer active:scale-95 select-none"
              >
                Discard
              </Link>
              <input
                type="submit"
                value="Update"
                className="border py-2 px-10 mt-2 bg-blue-600 text-white hover:bg-blue-400 cursor-pointer active:scale-95"
              />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default UpdateAssignment;
