import { useContext } from "react";
import useSubmittedData from "../../hooks/useSubmittedData";
import { AuthContext } from "../../context/Authentication";
import LoadingSpin from "../../components/Loading/LoadingSpin";
import { Helmet } from "react-helmet";

const MyAssignment = () => {
  const { user } = useContext(AuthContext);
  const { data: submittedData, isLoading } = useSubmittedData();

  if (isLoading) {
    return <LoadingSpin />;
  }

  const myCompletedAssignment = submittedData.filter(
    (data) => data?.submittedBy === user?.email
  );

  return (
    <>
      <Helmet>
        <title>My Assignments</title>
      </Helmet>
      <div className="md:w-9/12 mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-2 my-3">
        {myCompletedAssignment.map((data) => (
          <div
            key={data._id}
            className={
              data.status === "completed"
                ? "bg-gray-100 dark:bg-footer p-2 border rounded-md"
                : "bg-gray-50 dark:bg-darkBlue p-2 border rounded-md"
            }
          >
            <p className="font-semibold">{data.title}</p>
            <p className="text-sm">Status: {data.status}</p>
            <p className="text-sm">Marks: {data.marks}</p>
            <p className="text-sm">Obtain Marks: {data.givenMarks}</p>
            <p className="text-sm">Examiner Feedback: {data?.feedback}</p>
            <p className="text-sm">Examinee: {data.examinee}</p>
            <p className="text-sm">Level: {data.level}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default MyAssignment;
