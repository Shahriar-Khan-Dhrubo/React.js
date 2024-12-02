import { useState, useEffect } from "react";

export default function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    setLoading(true);
    setErrorMessage("");

    const timeoutId = setTimeout(() => {
      fetch(url)
        .then((res) => {
          if (!res.ok) {
            throw new Error("Fetching is not successful");
          }
          return res.json();
        })
        .then((data) => {
          setData(data);
        })
        .catch((error) => {
          setErrorMessage(error.message);
        })
        .finally(() => {
          setLoading(false); // Set loading to false after data is fetched
        });
    }, 2000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [url]);

  return { data, loading, errorMessage };
}
