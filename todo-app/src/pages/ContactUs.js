import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import NavBar from '../components/NavBar';
import Button from '@mui/material/Button'

import { useState } from 'react';

export default function ContactUs() {
  const [theme] = useState(localStorage.getItem('theme'))
  return (
    <div className={`App ${theme}`}>
    <NavBar />
    <h1>Contact Us</h1>
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          required
          id="filled-required"
          label="Full Name"
          defaultValue=""
          variant="filled"
        />
         <TextField
          required
          id="filled-required"
          label="Email"
          defaultValue=""
          variant="filled"
        />
      </div>
      <div>
      <TextField
          required
          id="filled-required"
          label="Phone Number"
          defaultValue=""
          variant="filled"
        />
         <TextField
          id="filled-multiline-static"
          label="Note:"
          multiline
          rows={4}
          defaultValue=""
          variant="filled"
          />
       </div>
       <Button variant="contained">Contact Support</Button>
       </Box>

    
       <h1>Get In Touch</h1>
       <h1>info@Todoapp.com</h1>
  

        </div>

  );
    }