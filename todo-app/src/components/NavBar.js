import React from 'react'

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

//import NavDropdown from 'react-bootstrap/NavDropdown';

import { LinkContainer } from 'react-router-bootstrap';

export default function NavBar() {
  return (
    // className='d-inline-block align-top'
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="justify-content-end flex-grow-1">
            <LinkContainer to='/' onClick={()=> window.location.reload}>
              <Nav.Link>Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to='/profilepage' onClick={()=> window.location.reload}>           
              <Nav.Link>Profile Page</Nav.Link>
            </LinkContainer>
            <LinkContainer to='/contactus' onClick={()=> window.location.reload}>
              <Nav.Link>Contact Us</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/settings" onClick={()=> window.location.reload}>
              <Nav.Link>Settings</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/addevent" onClick={()=> window.location.reload}>
              <Nav.Link>Add Event</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

  )
}

