import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const getData = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(`http://localhost:3000${url}`);
        const data = await response.json();
        setData(data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
        setIsLoading(false);
      }
    };
    getData();
  }, [url]);

  return { data, isLoading };
};

export default useFetch;
