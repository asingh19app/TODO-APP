import './App.css';
import NavigationBar from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css'
<<<<<<< HEAD
import { Eventcalendar } from "@mobiscroll/react";
import "@mobiscroll/react/dist/css/mobiscroll.min.css";
import {Link} from 'react-router-dom'

=======
import React from 'react';
import { Eventcalendar, getJson, toast } from '@mobiscroll/react';
import "@mobiscroll/react/dist/css/mobiscroll.min.css";
import Home from './pages/Home'
import ContactUs from './pages/ContactUs'
import Settings from './pages/Settings';
import ProfilePage from './pages/ProfilePage'

import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom'
>>>>>>> 049be3da48e48ebb38575abe3b9790d6a5b31ed6

function App() {

  return (
    <>
<<<<<<< HEAD
      <p>Hello testing</p>
      <NavigationBar />
      <Eventcalendar 
    data={[{
        start: new Date(),
        title: 'Today\'s event'
    }, {
        start: new Date(2020, 11, 18, 9, 0),
        end: new Date(2020, 11, 20, 13, 0),
        title: 'Multi day event'
    }]}
/>
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
>>>>>>> 049be3da48e48ebb38575abe3b9790d6a5b31ed6
    </>
  );
}

export default App;
