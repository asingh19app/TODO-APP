import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function MyComponent() {
  const [myArray, setMyArray] = useState([]);

  useEffect(() => {
    async function fetchData() {
        try {
          const response = await axios.get('http://localhost:5000/TODO/v1/form'); 
          setMyArray(response.data);
        } catch (error) {
          console.error(error);
        }
      }
      fetchData();

  }, [])

  return (
    myArray
  );
}

