import { useQuery } from "@tanstack/react-query";

const useAssignments = (currentPage, item) => {
  const { data, isLoading, isFetching, refetch } = useQuery({
    queryKey: ["assignments", currentPage, item],
    queryFn: async () => {
      const data = await fetch(
        `https://rp-assignment-11.vercel.app/assignments?page=${currentPage}&size=${item}`
      );
      return await data.json();
    },
  });
  return { data, isLoading, isFetching, refetch };
};

export default useAssignments;
