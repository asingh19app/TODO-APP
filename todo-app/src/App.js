import './App.css';
import NavigationBar from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react';
import Home from './pages/Home'
import ContactUs from './pages/ContactUs'
import Settings from './pages/Settings';
import ProfilePage from './pages/ProfilePage'

import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom'

function App() {

  return (
    <>
      <Router>
        {/* These are to test the links */}
        <Link to='/settings'>Settings</Link>
        <Link to='/profilepage'>Profile Page</Link>
        <Link to='/contactus'> Contact Us</Link>
        
        
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/settings' element={<Settings/>} />
        <Route path='/contactus' element={<ContactUs />} />
        <Route path='/profilepage' element={<ProfilePage />}/>  
      </Routes>
      </Router>
    </>
  );
}

export default App;
