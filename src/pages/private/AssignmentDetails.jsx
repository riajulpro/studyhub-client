import { useContext, useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/Authentication";
import axios from "axios";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet";

const AssignmentDetails = () => {
  const [activateModal, setActivateModal] = useState(false);
  const { user } = useContext(AuthContext);

  const navigate = useNavigate();

  const assignmentDetails = useLoaderData();
  const previousData = assignmentDetails[0];
  const { _id, ...rest } = previousData;

  console.log(_id);

  const takeAssignment = (event) => {
    event.preventDefault();

    const form = event.target;
    const pdf = form.pdf.value;
    const note = form.note.value;

    const submittedData = {
      ...rest,
      pdf,
      note,
      status: "pending",
      submittedBy: user?.email,
      examinee: user?.displayName,
    };

    if (pdf.trim() === "" || note.trim() === "") {
      Swal.fire({
        title: "Warning!",
        text: "You can't put the marks or feedback field empty.",
        icon: "warning",
      });
    } else {
      axios
        .post("https://rp-assignment-11.vercel.app/submitted", submittedData)
        .then((res) => {
          if (res?.data?.acknowledged) {
            setActivateModal(false);
            Swal.fire({
              title: "Submitted Successful!",
              text: "Your assignment has been submitted.",
              icon: "success",
            });
            navigate("/submitted-assignment");
          }
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <>
      <Helmet>
        <title>Assignment Details</title>
      </Helmet>
      <div className="md:w-9/12 mx-auto my-5 border rounded-md p-3">
        {assignmentDetails.map((data) => (
          <div key={data._id}>
            <div>
              <img
                src={data?.thumbnail}
                alt=""
                className="w-full object-cover"
              />
            </div>
            <h1 className="font-bold text-2xl">{data?.title}</h1>
            <p>
              <span className="font-semibold">Description:</span>{" "}
              {data?.description}
            </p>
            <p>
              <span className="font-semibold">Difficulty Level:</span>{" "}
              {data?.level}
            </p>
            <p>
              <span className="font-semibold">DueDate:</span> {data?.dueDate}
            </p>
            <p>
              <button
                className="bg-primary text-white px-3 py-1 mr-1 hover:bg-primary/75 active:scale-95 rounded mt-3"
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
                      className="bg-primary hover:bg-primary/75 active:scale-95 cursor-pointer text-white font-semibold px-3 py-1 mr-2"
                    />
                    <button
                      onClick={() => setActivateModal(false)}
                      className="bg-gray-100 hover:bg-gray-50 cursor-pointer font-semibold px-3 py-1 active:scale-95"
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
    </>
  );
};

export default AssignmentDetails;
