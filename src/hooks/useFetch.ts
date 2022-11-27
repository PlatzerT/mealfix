import { useEffect, useState } from "react";
import api from "../utils/api";

function useFetch<T>(url: string, options?: any) {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    api
      .get(url, options)
      .then((res) => {
        setLoading(false);
        setData(res.data);
      })
      .catch((err) => {
        setLoading(false);
        setError(err);
      });
  }, [url]);

  return { data, loading, error };
}

export default useFetch;
