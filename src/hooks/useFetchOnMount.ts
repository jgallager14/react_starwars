import { useEffect, useState } from "react";

export function useFetchOnMount<T>(apiEndpoint: string) {
  const [data, updateData] = useState<T>();
  const [isLoading, updateIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const abortController = new AbortController();

    async function fetchData() {
      const response = await fetch(apiEndpoint, {
        signal: abortController.signal,
      });
      const data = await response.json();
      updateData(data);
      updateIsLoading(false);
    }

    fetchData();

    return () => {
      abortController.abort();
    };
  }, []);

  return { data, isLoading };
}
