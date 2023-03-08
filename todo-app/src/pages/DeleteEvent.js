import React from 'react'
import Index from '../components/Index'
import NavBar from '../components/NavBar'

import 'bootstrap/dist/css/bootstrap.min.css'
import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router'
import eventDatabase from '../App'

export default function DeleteEvent() {
    const navigate = useNavigate()
    const [formData, setFormData] = useState({
        title: '',
        startTime: '',
        endTime: '',
        category: '',
        note: '',
      })
const baseURL = 'http://localhost:5000/TODO/v1/form'

   
  return (
  <>
  <NavBar/>        
        <div>
            <h1>Delete Events</h1>
            <form>
            <label>
            Title:
            <input type="text" value={formData.title} onChange={(e) => setFormData({ ...formData, title: e.target.value})} />
            </label>
            <div className="btn">
                <div className="delete-btn">Delete</div>
             </div>
             </form>
        </div>
</>
  )
}
