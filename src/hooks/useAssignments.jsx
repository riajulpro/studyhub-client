import { useQuery } from "@tanstack/react-query";

const useAssignments = (currentPage, item) => {
  const { data, isLoading, isFetching, refetch } = useQuery({
    queryKey: ["assignments", currentPage, item],
    queryFn: async () => {
      const data = await fetch(
        `http://localhost:5000/assignments?page=${currentPage}&size=${item}`
      );
      return await data.json();
    },
  });
  return { data, isLoading, isFetching, refetch };
};

export default useAssignments;
