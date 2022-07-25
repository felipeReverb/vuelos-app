import axios from "axios";
import { useState } from "react";

const [state, setstate] = useState({
    data: null,
    isLoading: true,
    error: null,
  });

const baseUrl = 'https://test.api.amadeus.com/v1/security/oauth2/token';
const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

const urlencoded = new URLSearchParams();
urlencoded.append("grant_type", "client_credentials");
urlencoded.append("client_id", "u6NcG436RJ6YlDuSHXId2Aa0G245fBAj");
urlencoded.append("client_secret", "MYh2EPAYFnFWmAw8");

const requestOptions = {
  headers: myHeaders,
};

export const useGetBearerToken = () => {

  axios.post(baseUrl, urlencoded, requestOptions)
    .then(response => {
        setToken(response.data.access_token)
    }
    )
    .catch(error => {
        console.log(error);
    }
    );
}


