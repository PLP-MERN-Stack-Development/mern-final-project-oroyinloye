// frontend/src/hooks/useApi.js
import { useState, useEffect } from "react";

const API_URL = process.env.REACT_APP_API_URL;

export function useApi(endpoint, options = {}, immediate = true) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(immediate);
  const [error, setError] = useState(null);

  const fetchData = async (customOptions = {}) => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(`${API_URL}${endpoint}`, {
        headers: {
          "Content-Type": "application/json",
          ...options.headers,
          ...customOptions.headers,
        },
        ...options,
        ...customOptions,
      });
      const json = await res.json();
      if (!res.ok) throw new Error(json.error || "Request failed");
      setData(json);
      return json; // ✅ return response for caller
    } catch (err) {
      setError(err.message);
      throw err; // ✅ rethrow so caller can handle if needed
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (immediate) fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [endpoint]);

  // ✅ Convenience methods
  const post = (body, extraOptions = {}) =>
    fetchData({ method: "POST", body: JSON.stringify(body), ...extraOptions });

  const put = (body, extraOptions = {}) =>
    fetchData({ method: "PUT", body: JSON.stringify(body), ...extraOptions });

  const del = (extraOptions = {}) =>
    fetchData({ method: "DELETE", ...extraOptions });

  return { data, loading, error, refetch: fetchData, post, put, del };
}
