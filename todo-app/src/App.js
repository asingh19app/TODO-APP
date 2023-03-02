import './App.css';
import NavigationBar from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css'
import Home from './pages/Home' 
import ContactUs from './pages/ContactUs';
import React from 'react';

import Settings from './pages/Settings';
import ProfilePage from './pages/ProfilePage'
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom'
import AddEvent from './pages/AddEvent';



function App() {

 return(
  <>
      <p>Hello testing</p>
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
        <Route path='/addevent' element={<AddEvent />}/>  
      </Routes>
      </Router>

    </>
 )
}

export default App;
