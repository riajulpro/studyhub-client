import { useQuery } from "@tanstack/react-query";

const useSubmittedData = () => {
  const { data, isLoading, isFetching } = useQuery({
    queryKey: ["submittedData"],
    queryFn: async () => {
      const data = await fetch("http://localhost:5000/submitted");
      return await data.json();
    },
  });
  return { data, isLoading, isFetching };
};

export default useSubmittedData;
