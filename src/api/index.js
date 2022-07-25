const BASE_URL = 'https://test.api.amadeus.com/v2/shopping/flight-offers';

export default async function apiCall(url, params) {
 try {
  const response = await fetch(`${BASE_URL}${url}`, params);
  const data = await response.json();
  return Promise.resolve(data);
 } catch (error) {
  return Promise.reject(error);
 }
};

export const apiCallGetToken = async () => {
    try {
        const urlencoded = new URLSearchParams();
        urlencoded.append("grant_type", "client_credentials");
        urlencoded.append("client_id", "u6NcG436RJ6YlDuSHXId2Aa0G245fBAj");
        urlencoded.append("client_secret", "MYh2EPAYFnFWmAw8");

        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
        
        const requestOptions = {
          method: 'POST',
          headers: myHeaders,
          body: urlencoded,
          redirect: 'follow'
        };

        const response = await fetch("https://test.api.amadeus.com/v1/security/oauth2/token", requestOptions);
        const data = await response.json();
        return Promise.resolve(data);
    } catch (error) {
        return Promise.reject(error);
    }
}

