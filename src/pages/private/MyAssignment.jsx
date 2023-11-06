import { useContext } from "react";
import useSubmittedData from "../../hooks/useSubmittedData";
import { AuthContext } from "../../context/Authentication";
import LoadingSpin from "../../components/Loading/LoadingSpin";

const MyAssignment = () => {
  const { data: submittedData, isLoading, isFetching } = useSubmittedData();
  const { user } = useContext(AuthContext);

  if (isLoading) {
    return <LoadingSpin />;
  }

  const myCompletedAssignment = submittedData.filter(
    (data) => data?.status === "completed" && data?.submittedBy === user?.email
  );

  return (
    <div>
      <h1>These are my assignment that I have done. </h1>
    </div>
  );
};

export default MyAssignment;
