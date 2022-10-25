import { useEffect, useState } from "react";

export function useFetchOnMount<T>(apiEndpoint: string) {
  const [data, updateData] = useState<T[]>();

  useEffect(() => {
    const abortController = new AbortController();

    async function fetchData() {
      let dataArray: T[] = [];
      let currentPage = apiEndpoint;
      while (currentPage !== null) {
        const response = await fetch(currentPage, {
          signal: abortController.signal,
        });
        const data = await response.json();
        for (let i = 0; i < data.results.length; i++) {
          dataArray.push(data.results[i]);
        }
        currentPage = data.next;
      }
      updateData(dataArray);
    }

    fetchData();

    return () => {
      abortController.abort();
    };
  }, []);

  return { data };
}
