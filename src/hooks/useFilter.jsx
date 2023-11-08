import { useQuery } from "@tanstack/react-query";

const useFilter = () => {
  const { data, isLoading, isFetching, refetch } = useQuery({
    queryKey: ["filterData"],
    queryFn: async () => {
      const data = await fetch(`http://localhost:5000/filter`);
      return await data.json();
    },
  });
  return { data, isLoading, isFetching, refetch };
};

export default useFilter;
