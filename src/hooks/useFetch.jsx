const { useState, useEffect } = require('react');

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    // fetch(url)
    //  .then((res) => res.json())
    //  .then((data) => setData(data));

    const fetchData = async () => {
        setIsLoading(true);
      const res = await fetch(url);
      const data = await res.json();
      setIsLoading(false);
      setData(data);
    };

    fetchData();
  }, [url]);

  return {
    data, isLoading
  };
};

export default useFetch;
