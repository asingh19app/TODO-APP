import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function AddEvent() {
  return (
    <Card style={{backgroundColor: 'white', color: 'black'}}>
      <Card.Body>
        <Card.Title>Add Your Event Here</Card.Title>
        <Card.Text>
         <form>
            <label>
                Title:
                <input type = 'text' name = 'title'></input>
            </label>
            <label>
                Date:
                <input type = 'date' name = 'date'></input>
            </label>
            <label>
                Start Time:
                <input type = 'time' name = 'startTime'></input>
            </label>
            <label>
                End Time:
                <input type = 'time' name = 'endTime'></input>
            </label>
            <label>
                Category:
                <input type = 'radio' name = 'category'></input>
            </label>
            <label>
                Note:
                <input type = 'textarea' name = 'note'></input>
            </label>
         </form>
        </Card.Text>
        <Button variant='primary'>Submit</Button>
      </Card.Body>
    </Card>
  );
}

export default AddEvent