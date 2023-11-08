import { useQuery } from "@tanstack/react-query";

const useFilter = () => {
  const { data, isLoading, isFetching, refetch } = useQuery({
    queryKey: ["filterData"],
    queryFn: async () => {
      const data = await fetch(`https://rp-assignment-11.vercel.app/filter`);
      return await data.json();
    },
  });
  return { data, isLoading, isFetching, refetch };
};

export default useFilter;
