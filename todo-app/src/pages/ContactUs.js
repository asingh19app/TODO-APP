import axios from 'axios'
import React from 'react'
import { useState } from 'react';
import NavBar from '../components/NavBar';
import './styles/form.css'
import { useNavigate } from 'react-router-dom'

export default function ContactUs() {
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
      phoneNumber: contactData.phoneNumber,
      note: contactData.note
    }

    try {
      await axios.post('/TODO/v1/contact', newContactDocument)
      alert('Success')
    } catch {
      console.log('Error')
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
        <input type="text" value={contactData.title} onChange={(e) => setContactData({ ...contactData, name: e.target.value})} />
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
       pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
       required value={contactData.endTime} onChange={(e) => setContactData({ ...contactData, phoneNumber: e.target.value})} />
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