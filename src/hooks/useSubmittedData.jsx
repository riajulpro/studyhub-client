import { useQuery } from "@tanstack/react-query";

const useSubmittedData = () => {
  const { data, isLoading, isFetching, refetch } = useQuery({
    queryKey: ["submittedData"],
    queryFn: async () => {
      const data = await fetch("http://localhost:5000/submitted", {
        credentials: "include",
      });
      return await data.json();
    },
  });
  return { data, isLoading, isFetching, refetch };
};

export default useSubmittedData;
