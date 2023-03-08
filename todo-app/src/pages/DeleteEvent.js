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
  // async function handleDelete() {
  //   try {
  //     await axios.delete(`http://localhost:5000/TODO/v1/form/:${selectedOption._id}`); 
  //     setMyOptions(myOptions.filter(obj => obj._id !== selectedOption._id));
  //     setSelectedOption('');
  //   } catch (error) {
  //     console.error(error);

  // There's an issue where if you try to delete by selecting an option I can't get it to delete the right one. It only deletes what's the first in the array
  // I tried to fix it by creating the function changedOption - it would change the useState of selectedOption onChange of the select form.
  // The problem I found out is that ${selectedOption._id} is not working. It's giving an undefined.
  async function handleDelete() {
    try {
      console.log(`http://localhost:5000/TODO/v1/form/:${selectedOption._id}`)
      setMyOptions(myOptions.filter(obj => obj._id !== selectedOption._id))
      await axios.delete(`http://localhost:5000/TODO/v1/form/:${selectedOption._id}`); 
     } catch (error) {
      console.error(error);
    }
  }

  function changedOption(e) {
    setSelectedOption(e.target.value);
    console.log(e.target.value)
    console.log(selectedOption.title)
  }

  return (
    <>
    <NavBar/>        
          <div>
              <h1>Delete Events</h1>
              <form onSubmit={handleDelete}>
                <div>
                  <select onChange={e=>changedOption(e)}>
                    {myOptions.map(obj => (
                      <option key={obj._id} value={obj.title}>{obj.title}</option>
                    ))}
                  </select>
                </div>
              <div className="btn">
                  <button>Delete Event</button>
               </div>
               </form>
          </div>
  </>
    )
  }








