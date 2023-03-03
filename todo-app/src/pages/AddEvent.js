import React from 'react'
import { useState } from 'react';
import NavBar from '../components/NavBar';
import './styles/form.css'

export default function AddEvent() {
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const [category, setCategory] = useState('')
  const [note, setNote] = useState('');
  const [theme] = useState(localStorage.getItem('theme'))

  const handleSubmit = (event) => {
    event.preventDefault();
  }
  return (
    <div className={`App ${theme}`}>
    <NavBar/>
    <h1>Add Event Here:</h1>
<form onSubmit={handleSubmit}>
      <label>
        Title:
        <input type="text" value={title} onChange={(event) => setTitle(event.target.value)} />
      </label>
      <br/>
      <label>
        Date:
        <input type="date" value={date} onChange={(event) => setDate(event.target.value)} />
      </label>
      <br/>
      <label>
        Start Time:
        <input type="time" value={startTime} onChange={(event) => setStartTime(event.target.value)} />
      </label>
      <br/>
      <label>
        End Time:
        <input type="time" value={endTime} onChange={(event) => setEndTime(event.target.value)} />
      </label>
      <br/>
      <label>
        Category:
        <select value={category} onChange={(event) => setCategory(event.target.value)}>
          <option value="category1">Personal</option>
          <option value="category2">Family</option>
          <option value="category3">Career</option>
          <option value="category4">School</option>
        </select>
      </label>
      <br/>
      <label>
        Note:
        <input type = 'text' value={note} onChange={(event) => setNote(event.target.value)} />
      </label>
      <br/>
      <button className = 'submitButton' type="submit">Submit</button>
    </form>
</div>
  );
}
