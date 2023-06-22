import { useState, useEffect } from "react";
import axios from "axios";

const api = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect((url) => {
    setLoading(true)
    axios.get(url).then((response) => {
        setData(response.data)
    }).catch((err) => {
        setError(err)
    }).finally(() => {
        setLoading(false)
    })
  }, [url])

  return {data, loading, error}
};

export default api;
