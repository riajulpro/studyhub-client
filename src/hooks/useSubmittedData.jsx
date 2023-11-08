import { useQuery } from "@tanstack/react-query";

const useSubmittedData = () => {
  const { data, isLoading, isFetching, refetch } = useQuery({
    queryKey: ["submittedData"],
    queryFn: async () => {
      const data = await fetch(
        "https://rp-assignment-11.vercel.app/submitted",
        {
          credentials: "include",
        }
      );
      return await data.json();
    },
  });
  return { data, isLoading, isFetching, refetch };
};

export default useSubmittedData;
