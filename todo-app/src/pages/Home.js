import React, {  useState, useEffect } from 'react'
import "@mobiscroll/react/dist/css/mobiscroll.min.css";
import NavigationBar from '../components/NavBar'
import Calendar from '../components/Calendar'
import axios from 'axios';

function useMongoDB() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get('/TODO/v1/myforms');
      setData(result.data);
    };

    fetchData();
  }, []);

  return data;
}


export default function Home() {
  const data = useMongoDB();

  return (
    <div>
      {data.map(item => (
        <div key={item._id}>
          <h2>{item.title}</h2>
          <p>{item.description}</p>
        </div>
      ))}
    </div>
  );
}
