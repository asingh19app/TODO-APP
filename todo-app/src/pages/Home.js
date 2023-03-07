import React, {  useState } from 'react'
import "@mobiscroll/react/dist/css/mobiscroll.min.css";
import NavigationBar from '../components/NavBar'
import Calendar from '../components/Calendar';
import axios from 'axios';


export default function Home() {
  const [theme] = useState(localStorage.getItem('theme'))
  
  const [formData, setFormData] = useState({
    title: '',
    startTime: '',
    endTime: '',
    category: '',
    note: '',
  })

const handleSubmit = async (event) => {
  event.preventDefault()

  const newFormDocument = {
    title: formData.title,
    startTime: formData.startTime,
    endTime: formData.endTime,
    category: formData.category,
    note: formData.note
  }

  try {
    await axios.post('/TODO/v1/myforms', newFormDocument)
    alert('Success')
    console.log(newFormDocument)
  } catch {
    console.log('Error')
  }


}

  return (

    <div className={`App ${theme}`}>
      <NavigationBar />
      <Calendar/>
        <button className = 'submitButton' type="submit" onSubmit={handleSubmit}>Submit</button>
  </div>
  )
}
