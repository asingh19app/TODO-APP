import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import NavBar from '../components/NavBar'

export default function AddEvent() {
  return (
    <>
    <NavBar/>
    <Card style={{backgroundColor: 'white', color: 'black', padding: '10rem'}}>
      <Card.Body>
        <Card.Title>Add Your Event Here</Card.Title>
        <Card.Text>
         <form>
            <label>
                Title:
                <input type = 'text' name = 'title'></input>
            </label>
            <br/>

            <label>
                Date:
                <input type = 'date' name = 'date'></input>
            </label>
            <br/>

            <label>
                Start Time:
                <input type = 'time' name = 'startTime'></input>
            </label>
            <br/>

            <label>
                End Time:
                <input type = 'time' name = 'endTime'></input>
            </label>
            <br/>
            
            <label>
                Category:
                <input type = 'radio' name = 'category'></input>
            </label>
            <br/>

            <label>
                Note:
                <input type = 'textarea' name = 'note'></input>
            </label>
         </form>
        </Card.Text>
        <Button variant='primary'>Submit</Button>
      </Card.Body>
    </Card>
    </>
  );
}
