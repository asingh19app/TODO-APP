import axios from 'axios'
import React from 'react'
import { useState } from 'react';
import NavBar from '../components/NavBar';
import './styles/form.css'
import { useNavigate } from 'react-router-dom'

export default function ContactUs() {
  const api = process.env.API_URL
  const navigate = useNavigate()
  const [theme] = useState(localStorage.getItem('theme'))
  const [contactData, setContactData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    note: '',
  })

  const handleSubmit = async (event) => {
    event.preventDefault()

    const newContactDocument = {
      name: contactData.name,
      email: contactData.email,
      number: contactData.number,
      note: contactData.note
    }

    try {
      await axios.post('http://localhost:5000/TODO/v1/contact', newContactDocument)
      alert('Success')
    } catch(err) {
      console.log(err)
    }

    navigate('/')
  }

  return (
    <div className={`App ${theme}`}>
    <NavBar/>
    <h1>Contact Us:</h1>
    <h1>If you have any questions or need help, please fill out the form below</h1>
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" value={contactData.name} onChange={(e) => setContactData({ ...contactData, name: e.target.value})} />
      </label>
      <br/>
      <label>
        Email:
        <input type="email" value={contactData.startTime} onChange={(e) => setContactData({ ...contactData, email: e.target.value})} />
      </label>
      <br/>
      <label>
        Phone Number:
        <input type="tel" id="phone" name="phone"
       required value={contactData.number} onChange={(e) => setContactData({ ...contactData, number: e.target.value})} />
      </label>
      <br/>
      <label>
        Note:
        <input type="text" value={contactData.note} onChange={(e) => setContactData({ ...contactData, note: e.target.value})} />
      </label>
      <br/>
      <button className = 'submitButton' type="submit">Submit</button>
    </form>
</div>
  );
}