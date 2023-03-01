import './App.css';
import NavigationBar from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css'
<<<<<<< HEAD
import Home from './pages/Home' 
import ContactUs from './pages/ContactUs';
=======
import React from 'react';
import { Eventcalendar, getJson, toast } from '@mobiscroll/react';
import "@mobiscroll/react/dist/css/mobiscroll.min.css";
import Home from './pages/Home'
import ContactUs from './pages/ContactUs'
import Settings from './pages/Settings';
import ProfilePage from './pages/ProfilePage'

import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom'
>>>>>>> refs/remotes/origin/development

function App() {

  return (
    <>
<<<<<<< HEAD
      <p>Hello testing</p>
      <NavigationBar />
      <Home />
=======
      <Router>
        <NavigationBar />
        {/* These are to test the links */}
        <Link to='/settings'>Settings</Link>
        <Link to='/profilepage'>Profile Page</Link>
        <Link to='/contactus'> Contact Us</Link>
        <Home />
        
      <Routes>
        <Route path='/settings' element={<Settings/>} />
        <Route path='/contactus' element={<ContactUs />} />
        <Route path='/profilepage' element={<ContactUs />}/>  
      </Routes>
      </Router>
>>>>>>> refs/remotes/origin/development
    </>
  );
}

export default App;
