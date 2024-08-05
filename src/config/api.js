import { useState, useEffect } from "react";
import axios from "axios";

const useGet = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      try {
        const response = await axios.get(url, {
          headers: {
            "X-Parse-Application-Id": import.meta.env.VITE_BACK4APP_APP_ID,
            "X-Parse-REST-API-Key": import.meta.env.VITE_BACK4APP_API_KEY,
          },
        });
        setData(response.data.results);
      } catch (err) {
        setError(err.message);
      }
      setLoading(false);
    };
    fetchData();
  }, [url]);

  return { data, loading, error };
};

export default useGet;
