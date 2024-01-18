import { useState, useEffect } from 'react';
import axios from 'axios';
import { RAPID_API_KEY } from '@env';

const apiKey = RAPID_API_KEY;

/*
*  This hook is a wrapper around the axios library
*  to contain fetching logic. It aims to reduce boilerplate
*  code, while also making fetch requests dynamic by:
*  1. Allowing different endpoints to be hit
*  2. Submitting different queries to the endpoint
*
*  Moreover, it exposes variables to track fetching states 
*  (i.e. isLoading, error), the data itself, and a refetch
*  method.
*/
function useFetch(endpoint, query) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchOptions = {
    method: 'GET',
    url: `https://jsearch.p.rapidapi.com/${endpoint}`,
    params: { ...query }, // Make query dynamic
    headers: {
      'X-RapidAPI-Key': apiKey, // get API key for JSearch API
      'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
    }
  };
  

  // The function to fire off when attempting
  // to fetch data. This will fire in useEffect.
  const fetchData = async () => {
    setIsLoading(true);
    
    try {
      const response = await axios.request(fetchOptions);

      setData(response.data.data);
      setIsLoading(false);
    } catch(error) {
      setError(error);
      alert('Trouble fetching from API. Try again.');
    }
    finally {
      console.log('Done attempting fetch via axios.');
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchData();
  },[])

  // Utility method to trigger 
  // refetches if needed.
  const refetch = () => {
    setIsLoading(true);
    fetchData();
  }

  return { data, isLoading, error, refetch }
}