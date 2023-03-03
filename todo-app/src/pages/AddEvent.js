import axios from 'axios'
import React from 'react'
import { useState } from 'react';
import NavBar from '../components/NavBar';
import '../form.css'
import { useNavigate } from 'react-router-dom'


function AddEvent() {

const navigate = useNavigate()

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
    } catch {
      console.log('Error')
    }

    navigate('/')
  }

  return (
    <>
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
        <input type="text" value={formData.startTime} onChange={(e) => setFormData({ ...formData, startTime: e.target.value})} />
      </label>
      <br/>
      <label>
        End Time:
        <input type="text" value={formData.endTime} onChange={(e) => setFormData({ ...formData, endTime: e.target.value})} />
      </label>
      <br/>
      <label>
        Category:
        <select value={formData.category} onChange={(e) => setFormData({ ...formData, category: e.target.value})}>
          <option value="category1">Personal</option>
          <option value="category2">Family</option>
          <option value="category3">Career</option>
          <option value="category4">School</option>
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
  </>
  );
}

export default AddEvent()