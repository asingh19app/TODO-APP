import './pages/styles/App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Home from './pages/Home' 
import ContactUs from './pages/ContactUs';
import React from 'react';

import Settings from './pages/Settings';
import ProfilePage from './pages/ProfilePage'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import AddEvent from './pages/AddEvent';
import { useState, useEffect } from 'react';

//Application
function App() {
const [theme]  =useState(localStorage.getItem('theme') || 'light')

useEffect(()=>{
  document.body.className =theme
  // document.getElementById()
}, [theme])


 return(
  <div className={`App ${theme}`}>
      <Router>  
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/settings' element={<Settings/>} />
          <Route path='/contactus' element={<ContactUs />} />
          <Route path='/profilepage' element={<ProfilePage />} />  
          <Route path='/addevent' element={<AddEvent/>}/>  
        </Routes>
      </Router>

    </div>
 )
}

export default App;
