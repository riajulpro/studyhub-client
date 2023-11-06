import { useContext } from "react";
import LoadingSpin from "../../components/Loading/LoadingSpin";
import useSubmittedData from "../../hooks/useSubmittedData";
import { AuthContext } from "../../context/Authentication";

const SubmittedAssignment = () => {
  const { data: submittedData, isLoading, isFetching } = useSubmittedData();
  const { user } = useContext(AuthContext);

  if (isLoading) {
    return <LoadingSpin />;
  }

  const mySubmission = submittedData.filter(
    (data) => data.submittedBy === user.email
  );

  const pendingSubmission = mySubmission.filter(
    (data) => data.status === "pending"
  );

  console.log(pendingSubmission);

  return (
    <div>
      <h1>
        Submitted Assignment, {submittedData?.length}, my {mySubmission.length}
      </h1>
    </div>
  );
};

export default SubmittedAssignment;
