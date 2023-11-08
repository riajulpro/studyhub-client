import { useContext, useState } from "react";
import LoadingSpin from "../../components/Loading/LoadingSpin";
import useSubmittedData from "../../hooks/useSubmittedData";
import { AuthContext } from "../../context/Authentication";
import axios from "axios";

const SubmittedAssignment = () => {
  const { user } = useContext(AuthContext);
  const [activateModal, setActivateModal] = useState(false);

  const { data: submittedData, isLoading } = useSubmittedData();
  if (isLoading) {
    return <LoadingSpin />;
  }

  const mySubmission = submittedData.filter(
    (data) => data.submittedBy === user.email && data.status === "pending"
  );

  const giveMarks = (event, data) => {
    event.preventDefault();

    const { _id } = data;

    const form = event.target;
    const givenMarks = form.givenMarks.value;
    const feedback = form.feedback.value;

    const reqBody = { feedback, givenMarks, status: "completed" };

    console.log("marks has been added", _id, reqBody);

    axios
      .put(`http://localhost:5000/submitted/${_id}`, reqBody)
      .then((res) => console.log(res.data));
  };

  return (
    <div>
      <div className="md:w-9/12 mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-2 my-3">
        {mySubmission.map((data) => (
          <div key={data._id} className="bg-gray-50 p-2 border rounded-md">
            <p className="font-semibold">{data.title}</p>
            <p className="text-sm">Examinee: {data.examinee}</p>
            <p className="border-b mb-2">Marks: {data.marks}</p>
            <p className="flex justify-end">
              <button
                className="bg-violet-400 hover:bg-violet-200 cursor-pointer text-white py-1 px-3 font-semibold rounded-sm active:scale-95"
                onClick={() => setActivateModal(true)}
              >
                Give mark
              </button>
            </p>
            <div>
              {activateModal ? (
                <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-60">
                  <div className="fixed bg-white w-2/3 md:w-1/2 h-auto top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-5 rounded-md">
                    <div>
                      <div className="bg-gray-50 p-1 border rounded-sm mb-3">
                        <p>
                          <span className="font-semibold">PDF:</span>{" "}
                          <a
                            href={data.pdf}
                            target="_blank"
                            className="text-violet-400"
                            rel="noopener noreferrer"
                          >
                            {data.pdf}
                          </a>
                        </p>
                        <p>
                          <span className="font-semibold">Quick Note:</span>{" "}
                          {data.note}
                        </p>
                      </div>
                      <form onSubmit={(event) => giveMarks(event, data)}>
                        <label
                          htmlFor="pdf-link"
                          className="w-full font-semibold"
                        >
                          Given Marks:
                          <input
                            type="text"
                            name="givenMarks"
                            id="given-marks"
                            className="border w-full p-1 rounded-sm font-normal"
                            placeholder="Enter the given marks"
                          />
                        </label>
                        <label
                          htmlFor="feedback"
                          className="w-full font-semibold"
                        >
                          Feedback:
                          <textarea
                            name="feedback"
                            id="feedback"
                            rows="5"
                            className="border w-full p-1 rounded-sm font-normal"
                            placeholder="Write your feedback..."
                          ></textarea>
                        </label>
                        <div>
                          <input
                            type="submit"
                            value="Submit"
                            className="bg-green-600 hover:bg-green-400 active:scale-95 cursor-pointer text-white font-semibold px-3 py-1 mr-2"
                          />
                          <button
                            onClick={() => setActivateModal(false)}
                            className="bg-red-600 hover:bg-red-400 cursor-pointer text-white font-semibold px-3 py-1 active:scale-95"
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
          </div>
        ))}
      </div>
    </div>
  );
};

export default SubmittedAssignment;
