import { useContext, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../context/Authentication";
import axios from "axios";

const AssignmentDetails = () => {
  const [activateModal, setActivateModal] = useState(false);
  const { user } = useContext(AuthContext);

  const assignmentDetails = useLoaderData();
  const previousData = assignmentDetails[0];
  const { _id, ...rest } = previousData;

  console.log(_id);

  const takeAssignment = (event) => {
    event.preventDefault();
    console.log("Assignment has been taken");

    const form = event.target;
    const pdf = form.pdf.value;
    const note = form.note.value;

    const submittedData = {
      ...rest,
      pdf,
      note,
      status: "pending",
      submittedBy: user?.email,
    };

    console.log(submittedData);

    axios
      .post("http://localhost:5000/submitted", submittedData)
      .then((res) => {
        console.log(res);
        if (res?.data?.acknowledged) {
          setActivateModal(false);
        }
      })
      .catch((err) => console.log(err));
  };

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
            <button
              className="bg-violet-400 text-white px-3 py-1 mr-1 hover:bg-violet-300 active:scale-95 rounded"
              onClick={() => setActivateModal(true)}
            >
              Take the Assignment
            </button>
          </p>
        </div>
      ))}
      {activateModal ? (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-60">
          <div className="fixed bg-white w-2/3 md:w-1/2 h-auto top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-5 rounded-md">
            <div>
              <form onSubmit={takeAssignment}>
                <label htmlFor="pdf-link" className="w-full font-semibold">
                  PDF Link:
                  <input
                    type="text"
                    name="pdf"
                    id="pdf-link"
                    className="border w-full p-1 rounded-sm font-normal"
                    placeholder="Enter the pdf link here"
                  />
                </label>
                <label htmlFor="note" className="w-full font-semibold">
                  Quick Note:
                  <textarea
                    name="note"
                    id="note"
                    rows="5"
                    className="border w-full p-1 rounded-sm font-normal"
                    placeholder="Write your short note..."
                  ></textarea>
                </label>
                <div>
                  <input
                    type="submit"
                    value="Submit"
                    className="bg-green-600 hover:bg-green-400 cursor-pointer text-white font-semibold px-3 py-1 mr-2"
                  />
                  <button
                    onClick={() => setActivateModal(false)}
                    className="bg-red-600 hover:bg-red-400 cursor-pointer text-white font-semibold px-3 py-1"
                  >
                    Close
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default AssignmentDetails;
