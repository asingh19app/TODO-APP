import React, {  useState } from 'react'
import "@mobiscroll/react/dist/css/mobiscroll.min.css";
import NavigationBar from '../components/NavBar'
import Calendar from '../components/Calendar'


export default function Home() {
const [theme] = useState(localStorage.getItem('theme'))
   
  return (

    <div className={`App ${theme}`}>
      <NavigationBar />
      <Calendar/>
  </div>
  )
}
