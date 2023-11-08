import { useContext, useState } from "react";
import LoadingSpin from "../../components/Loading/LoadingSpin";
import useSubmittedData from "../../hooks/useSubmittedData";
import { AuthContext } from "../../context/Authentication";
import axios from "axios";
import Swal from "sweetalert2";
import { AiOutlineDelete } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import PdfViewer from "../../components/PdfViewer";
import { Helmet } from "react-helmet";

const SubmittedAssignment = () => {
  const { user } = useContext(AuthContext);
  const [activateModal, setActivateModal] = useState(false);

  const navigate = useNavigate();

  const { data: submittedData, isLoading, refetch } = useSubmittedData();
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

    if (givenMarks.trim() === "" || feedback.trim() === "") {
      Swal.fire({
        title: "Warning!",
        text: "You can't put the marks or feedback field empty.",
        icon: "warning",
      });
    } else {
      axios
        .put(`https://rp-assignment-11.vercel.app/submitted/${_id}`, reqBody)
        .then(() => {
          Swal.fire({
            title: "Successfully Done!",
            text: "Mark has been added to the assignment",
            icon: "success",
          });
          navigate("/my-assignment");
        });
    }
  };

  const deleteAnItem = (id) => {
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
          .delete(`https://rp-assignment-11.vercel.app/submitted/${id}`)
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
  };

  return (
    <>
      <Helmet>
        <title>Submitted Assignment</title>
      </Helmet>
      <div className="md:w-9/12 mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-2 my-3">
        {mySubmission.map((data) => (
          <div key={data._id} className="bg-gray-50 p-2 border rounded-md">
            <p className="font-semibold">{data.title}</p>
            <p className="text-sm">Examinee: {data.examinee}</p>
            <p className="border-b mb-2">Marks: {data.marks}</p>
            <p className="flex items-center justify-between">
              <button
                onClick={() => deleteAnItem(data._id)}
                className="hover:scale-105"
              >
                <AiOutlineDelete />
              </button>
              <button
                className="bg-primary hover:bg-primary/75 cursor-pointer text-white py-1 px-3 font-semibold rounded-sm active:scale-95"
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
                        <div className="border-b">
                          <PdfViewer pdfUrl={data?.pdf} />
                        </div>
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
          </div>
        ))}
      </div>
    </>
  );
};

export default SubmittedAssignment;
