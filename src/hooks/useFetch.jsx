const { useState, useEffect } = require('react');

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    // fetch(url)
    //  .then((res) => res.json())
    //  .then((data) => setData(data));

    const fetchData = async () => {
        setIsLoading(true);

        try {
            const res = await fetch(url);
            if (!res.ok) {
                throw new Error(res.statusText);
            }

            const data = await res.json();
            setIsLoading(false);
            setData(data);

        } catch (error) {
            setIsLoading(false);
            setError("error");
            console.log(error.message);
            
        }



     
    };

    fetchData();
  }, [url]);

  return {
    data, isLoading, error
  };
};

export default useFetch;
