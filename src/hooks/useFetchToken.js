import { useEffect, useState } from "react";


const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

const urlencoded = new URLSearchParams();
urlencoded.append("grant_type", "client_credentials");
urlencoded.append("client_id", "u6NcG436RJ6YlDuSHXId2Aa0G245fBAj");
urlencoded.append("client_secret", "MYh2EPAYFnFWmAw8");

const requestOptions = {
  headers: myHeaders,
};

export const useFetch = (baseUrl) => {

  const [state, setstate] = useState({
    data: null,
    isLoading: true,
    error: null,
  });

  const getData = async () => {
    setstate({ ...state, isLoading: true });

    const response = axios.post(baseUrl, urlencoded, requestOptions)
    .then(response => {
      setstate({
        data,
        isLoading: false,
        error: null,
      });
    }
    )
    .catch(error => {
        console.log(error);
    }
    );
  }
  

  useEffect(() => {
    getData();
  }, [baseUrl]);

  return {
    data: state.data,
    isLoading: state.isLoading,
    error: state.error,
  };
};
