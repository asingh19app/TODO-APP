import React from 'react'
import NavBar from '../components/NavBar'
import { useState } from 'react'

export default function ProfilePage() {
  const [theme] = useState(localStorage.getItem('theme'))
  return (
    <div className={`App ${theme}`}>
        <NavBar />
        <div>ProfilePage</div>
    </div>
  )
}
