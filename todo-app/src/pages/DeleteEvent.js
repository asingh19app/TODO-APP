import NavBar from '../components/NavBar'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useState, useEffect } from 'react'
import axios from 'axios'

export default function DeleteEvent() {
  const [myOptions, setMyOptions] = useState([]);
  const [selectedOption, setSelectedOption] = useState('');

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get('http://localhost:5000/TODO/v1/form'); // replace with your API endpoint
        setMyOptions(response.data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, []);

  async function handleDelete() {
    try {
      await axios.delete(`http://localhost:5000/TODO/v1/form/:${selectedOption._id}`); 
      setMyOptions(myOptions.filter(obj => obj._id !== selectedOption._id));
      setSelectedOption('');
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <>
    <NavBar/>        
          <div>
              <h1>Delete Events</h1>
              <form>
                <div>
                  <select>
                    {myOptions.map(obj => (
                      <option key={obj._id} value={obj.title}>{obj.title}</option>
                    ))}
                  </select>
                </div>
              <div className="btn">
                  <button onClick={handleDelete}>Delete Event</button>
               </div>
               </form>
          </div>
  </>
    )
  }








