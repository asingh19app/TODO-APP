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
    start: '',
    start: '',
    end: '',
    title: '',
    description: '',
    color: '',
  })
  const handleSubmit = async (event) => {
    event.preventDefault()

    const newFormDocument = {
      start: formData.start,
      end: formData.end,
      title: formData.title,
      description: formData.description,
      color: formData.color
    }

    try {
      await axios.post('http://localhost:5000/TODO/v1/form', newFormDocument)
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
        <input type="datetime-local" value={formData.start} onChange={(e) => setFormData({ ...formData, start:new Date(e.target.value).toISOString().slice(0,16)})}
         />

      </label>
      <br/>
      <label>
        End Time:
        <input type="datetime-local" value={formData.end} onChange={(e) => setFormData({ ...formData, end: new Date(e.target.value).toISOString().slice(0,16)})} />
      </label>
      <br/>
      <label>
        Category:
        <select value={formData.color}  onChange={(e) => setFormData({ ...formData, color: e.target.value})}>
          {/* defaultValue='Personal' */}
          <option value="#b80000">Personal</option>
          <option value="#1273de">Family</option>
          <option value="#fccb00">Career</option>
          <option value="#008b02">School</option>
        </select>
      </label>
      <br/>
      <label>
        Note:
        <input type="text" value={formData.description} onChange={(e) => setFormData({ ...formData, description: e.target.value})} />
      </label>
      <br/>
      <button className = 'submitButton' type="submit">Submit</button>
    </form>
</div>
  );
}

