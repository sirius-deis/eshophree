import { useState, useEffect } from 'react';

const baseUrl = 'http://localhost:3000/api/v1/';

const useFetch = (url, options) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const abortController = new AbortController();
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(`${baseUrl}${url}`, {
          ...options,
          signal: abortController.signal,
          credentials: 'include',
        });
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        const receivedData = await response.json();
        setData(receivedData.data);
      } catch (error) {
        setError(error);
      }
      setIsLoading(false);
    };
    fetchData();
    return () => {
      abortController.abort();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [url]);
  return [data, isLoading, error];
};

export default useFetch;
