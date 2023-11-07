import { useQuery } from "@tanstack/react-query";

const useAssignments = () => {
  const { data, isLoading, isFetching, refetch } = useQuery({
    queryKey: ["assignments"],
    queryFn: async () => {
      const data = await fetch(`http://localhost:5000/assignments`);
      return await data.json();
    },
  });
  return { data, isLoading, isFetching, refetch };
};

export default useAssignments;
