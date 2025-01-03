const { useState, useEffect } = require('react');

const useFetch = (url, method="GET") => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [options, setOptions] = useState(null);

  const postData = (data) =>{
    setOptions({
      method:"POST",
      headers:{
        "Content-Type":"aplication/json"
      },
      body:JSON.stringify(data)
    })
  }

  useEffect(() => {
    // fetch(url)
    //  .then((res) => res.json())
    //  .then((data) => setData(data));

    const fetchData = async (options) => {
      setIsLoading(true);

      try {
        const res = await fetch(url, {...options});
        if (!res.ok) {
          throw new Error(res.statusText);
        }

        const data = await res.json();
        setIsLoading(false);
        setData(data);
      } catch (error) {
        setIsLoading(false);
        setError('error');
        console.log(error.message);
      }
    };

      if(method==="GET") {
        fetchData();
      }

      if(method==="POST" && options) {
        fetchData(options)
      }

    fetchData();
  }, [url, options, method]);

  return {
    data,
    isLoading,
    error,
    postData,
  };
};

export default useFetch;
