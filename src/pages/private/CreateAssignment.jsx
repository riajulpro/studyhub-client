import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/Authentication";
import axios from "axios";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet";

const CreateAssignment = () => {
  const { user } = useContext(AuthContext);

  const navigate = useNavigate();

  const createAssignment = (event) => {
    event.preventDefault();

    const form = event.target;
    const title = form.title.value;
    const thumbnail = form.thumbnail.value;
    const description = form.description.value;
    const marks = form.marks.value;
    const level = form.level.value;
    const dueDate = form.dueDate.value;

    // Validity Checking for each of the field
    if (title.trim() === "") {
      Swal.fire({
        title: "Invalid Title!",
        text: "Title cannot be empty",
        icon: "warning",
      });
      return;
    }

    if (thumbnail.trim() === "") {
      Swal.fire({
        title: "Invalid Thumbnail URL!",
        text: "Thumbnail URL cannot be empty",
        icon: "warning",
      });
      return;
    }

    if (description.trim() === "") {
      Swal.fire({
        title: "Invalid Description!",
        text: "Description cannot be empty",
        icon: "warning",
      });
      return;
    }

    if (isNaN(parseInt(marks)) || parseInt(marks) <= 0) {
      Swal.fire({
        title: "Invalid Marks!",
        text: "Marks must be a positive number",
        icon: "warning",
      });
      return;
    }

    if (level.trim() === "") {
      Swal.fire({
        title: "Invalid Level!",
        text: "Level cannot be empty",
        icon: "warning",
      });
      return;
    }

    if (dueDate.trim() === "") {
      Swal.fire({
        title: "Invalid Due Date!",
        text: "Due date cannot be empty",
        icon: "warning",
      });
      return;
    }

    const assignment = {
      title,
      thumbnail,
      description,
      marks,
      level,
      dueDate,
      userEmail: user.email,
    };

    axios
      .post("https://rp-assignment-11.vercel.app/assignment", assignment)
      .then(() => {
        Swal.fire({
          title: "Succeed",
          text: "You have successfully created the assignment.",
          icon: "success",
          confirmButtonText: "Okay",
        });
        navigate("/all-assignment");
      })
      .catch((err) => console.log(err));

    form.title.value = "";
    form.thumbnail.value = "";
    form.description.value = "";
    form.marks.value = "";
    form.level.value = "";
    form.dueDate.value = "";
  };

  return (
    <>
      <Helmet>
        <title>Create Assignment</title>
      </Helmet>
      <div className="bg-gray-100 h-[calc(100vh-100px)] flex justify-center items-center">
        <div className="w-11/12 md:w-1/2 mx-auto rounded-md shadow-md p-3 bg-white">
          <h1 className="text-xl md:text-3xl font-bold mb-5">
            Create an Assignment
          </h1>
          <form onSubmit={createAssignment}>
            <div className="flex flex-col md:flex-row gap-2">
              <input
                type="text"
                name="title"
                className="p-1 w-full border"
                placeholder="Enter title"
              />
              <input
                type="text"
                name="thumbnail"
                className="p-1 w-full border"
                placeholder="Enter thumbnail url (E.g. https://thumbnail-url.com/enter.jpg)"
              />
            </div>
            <div>
              <textarea
                name="description"
                rows="5"
                className="border w-full p-1 my-1"
                placeholder="Write description here"
              ></textarea>
            </div>
            <div className="flex flex-col md:flex-row gap-2">
              <input
                type="text"
                name="marks"
                className="border flex-1 p-1"
                placeholder="Marks"
              />
              <select name="level" className="border flex-1 p-1">
                <option value="easy">Easy</option>
                <option value="medium">Medium</option>
                <option value="hard">Hard</option>
              </select>
              <input type="date" name="dueDate" className="border flex-1 p-1" />
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
                value="Create"
                className="border py-2 px-10 mt-2 bg-blue-600 text-white hover:bg-blue-400 cursor-pointer active:scale-95"
              />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default CreateAssignment;
