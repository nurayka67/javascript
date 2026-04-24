import { useState, useEffect, useCallback } from "react";

export function useApi(apiFunction, deps = []) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const result = await apiFunction();
      setData(result);
    } catch (err) {
      setError(err.message || "An error occurred");
    } finally {
      setLoading(false);
    }
  }, [apiFunction]);

  useEffect(() => {
    fetchData();
  }, [fetchData, ...deps]);

  return { data, loading, error, refetch: fetchData };
}