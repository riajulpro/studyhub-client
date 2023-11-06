import { Link } from "react-router-dom";

const UpdateAssignment = () => {
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

    console.log(updatedData);
  };

  return (
    <div className="bg-gray-100 h-screen flex justify-center items-center">
      <div className="w-11/12 md:w-1/2 mx-auto rounded-md shadow-md p-3 bg-white">
        <h1 className="text-xl md:text-3xl font-bold mb-5">
          Update the Assignment
        </h1>
        <form onSubmit={updateAssignment}>
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
              placeholder="https://thumbnail-url.com/enter.jpg"
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
  );
};

export default UpdateAssignment;
