import { useState, useEffect, useMemo } from 'react';
import axios from 'axios';

export function useApi(baseUrl, inputTerm) {
  console.log(inputTerm);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const url = useMemo(() => {
    const newUrl = new URL(baseUrl);
    if (inputTerm) {
      newUrl.searchParams.set('phrase', inputTerm);
    }
    return newUrl;
  }, [baseUrl, inputTerm]);

  useEffect(() => {
    async function loadData() {
      setLoading(true);
      try {
        const response = await axios.get(url);
        console.log(response.data);
        setData(response.data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    }

    loadData();
  }, [url]);

  return {
    data,
    loading,
    error,
  };
}