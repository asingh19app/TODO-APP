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

import Index from './components/Index';
import DeleteEvent from './pages/DeleteEvent';

//Application
function App() {
const [theme]  =useState(localStorage.getItem('theme') || 'light')
const [eventDatabase, setDatabase] =useState([])

useEffect(()=>{
  document.body.className =theme
  // document.getElementById() 
  //deploy
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
          <Route path='/deleteevent' element={<DeleteEvent />} /> 
        </Routes>
      </Router>
     {/* <Index /> */}
    </div>
 )
}

export default App;
