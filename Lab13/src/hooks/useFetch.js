import { useState, useEffect, useCallback } from 'react';

const cache = new Map();

export function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = useCallback(async () => {
    if (!url) return;
    if (cache.has(url)) {
      setData(cache.get(url));
      setLoading(false);
      return;
    }
    setLoading(true);
    try {
      const res = await fetch(url);
      const json = await res.json();
      cache.set(url, json);
      setData(json);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, [url]);

  useEffect(() => { fetchData(); }, [fetchData]);

  return { data, loading, error, refetch: fetchData };
}