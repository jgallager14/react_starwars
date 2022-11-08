import { useEffect } from "react";

interface UseFetchOnMountOptions<T> {
  apiEndpoint: string;
  postFetchCallback?: (data: T) => void;
}

export function useFetchOnMount<T>({
  apiEndpoint,
  postFetchCallback,
}: UseFetchOnMountOptions<T>) {
  useEffect(() => {
    const abortController = new AbortController();

    async function fetchData() {
      const response = await fetch(apiEndpoint, {
        signal: abortController.signal,
      });
      const data = await response.json();
      if (postFetchCallback) {
        postFetchCallback(data);
      }
    }

    fetchData();

    return () => {
      abortController.abort();
    };
  }, []);
}
