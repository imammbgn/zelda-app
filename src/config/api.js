import { useState, useEffect } from "react";
import axios from "axios";

const useGet = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true)
      const fetchData = async () => {
        try {
          const response = await axios.get(url)
          setData(response.data)
        } catch (err) {
          setError(err.message)
        }
        setLoading(false)
      }
      fetchData()
  }, [url])

  return {data, loading, error}
};

export default useGet;
