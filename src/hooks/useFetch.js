import { useState, useEffect } from "react";

const useFetch = (url, options) => {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const abortController = new AbortController();
        const fetchData = async () => {
            setIsLoading(true);

            const response = await fetch(url, { ...options, signal: abortController.signal });
            if (!response.ok) {
                throw new Error(response.statusText);
            }
            const receivedData = await response.json();
            setData(receivedData);
            setIsLoading(false);
        };
        try {
            fetchData();
        } catch (error) {
            setError(error);
            setIsLoading(false);
        }
        return () => {
            abortController.abort();
        };
    }, [url]);

    return [data, isLoading, error];
};

export default useFetch;
