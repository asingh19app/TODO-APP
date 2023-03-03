import React, { useEffect, useState } from 'react'
import NavBar from '../components/NavBar'
import './styles/mode.css'

import {Button} from '@mui/material'

export default function Settings() {
  // const [theme, setTheme]  =useState(localStorage.getItem('theme') || 'light')
  const [theme, setTheme] = useState(localStorage.getItem('theme'))
  const toggleTheme = ()=>{
    if (theme === 'light'){
      setTheme('dark')
    }
    else{
      setTheme('light')
    }
  }
  
  //Use Effect
  useEffect(()=>{
    localStorage.setItem('theme', theme)
    document.body.className =theme
  }, [theme])

  return (
    <div className={`App ${theme}`}>
      <NavBar />
      <h1>Settings</h1>
      <h2>This button will the background from light mode to dark and vice-versa</h2>
      <Button variant='contained' onClick={toggleTheme} className='settingBtn'>Change Mode</Button>

    </div>
  )
}
