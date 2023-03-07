import axios from 'axios'
import React from 'react'
import { useState } from 'react';
import NavBar from '../components/NavBar';
import './styles/form.css'
import { useNavigate } from 'react-router-dom'

export default function AddEvent() {
  
  const api = process.env.API_URL;
  const navigate = useNavigate()

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
      await axios.get('http://localhost:5000/TODO/v1/myforms', newFormDocument)
      alert('Success')
    } catch (err){
      console.log(err)
      // console.error()
    }

    navigate('/')
  }

  return (
    <div className={`App ${theme}`}>
    <NavBar/>
    <h1>Add Event Here:</h1>
    <form onSubmit={handleSubmit}>
      <label>
        Title:
        <input type="text" value={formData.title} onChange={(e) => setFormData({ ...formData, title: e.target.value})} />
      </label>
      <br/>
      <label>
        Start Time
        {/* Constructed date object from formdata => parsed to iso string then slicing the milliseconds to match format  */}
        <input type="datetime-local" value={formData.startTime} onChange={(e) => setFormData({ ...formData, startTime:new Date(e.target.value).toISOString().slice(0,16)})}
         />

      </label>
      <br/>
      <label>
        End Time:
        <input type="datetime-local" value={formData.endTime} onChange={(e) => setFormData({ ...formData, endTime: new Date(e.target.value).toISOString().slice(0,16)})} />
      </label>
      <br/>
      <label>
        Category:
        <select value={formData.category}  onChange={(e) => setFormData({ ...formData, category: e.target.value})}>
          {/* defaultValue='Personal' */}
          <option value="Personal">Personal</option>
          <option value="Family">Family</option>
          <option value="Career">Career</option>
          <option value="School">School</option>
        </select>
      </label>
      <br/>
      <label>
        Note:
        <input type="text" value={formData.note} onChange={(e) => setFormData({ ...formData, note: e.target.value})} />
      </label>
      <br/>
      <button className = 'submitButton' type="submit">Submit</button>
    </form>
</div>
  );
}

