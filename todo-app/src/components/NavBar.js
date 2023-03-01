import React from 'react'

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
//import NavDropdown from 'react-bootstrap/NavDropdown';


export default function NavBar() {
  return (
    // className='d-inline-block align-top'
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="justify-content-end flex-grow-1">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Profile Page</Nav.Link>
            <Nav.Link href='#contactus'>Contact Us</Nav.Link>
            <Nav.Link>Settings</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

  )
}

