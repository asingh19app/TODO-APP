import React from 'react'
import { useState } from 'react';

function AddEvent() {
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const [note, setNote] = useState('');
  const [selectedOption, setSelectedOption] = useState('');

  const options = [
    { value: 'option1', label: 'Family' },
    { value: 'option2', label: 'Career' },
    { value: 'option3', label: 'School' },
    { value: 'option4', label: 'Interpersonal' },
    { value: 'option5', label: 'Growth' },
  ];

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  }
  return (
<form onSubmit={handleSubmit}>
      <label>
        Title:
        <input type="text" value={title} onChange={(event) => setTitle(event.target.value)} />
      </label>
      <label>
        Date:
        <input type="date" value={date} onChange={(event) => setDate(event.target.value)} />
      </label>
      <label>
        Start Time:
        <input type="time" value={startTime} onChange={(event) => setStartTime(event.target.value)} />
      </label>
      <label>
        End Time:
        <input type="time" value={endTime} onChange={(event) => setEndTime(event.target.value)} />
      </label>
      {options.map((option) => (
        <div key={option.value}>
          <label>
            <input
              type="radio"
              value={option.value}
              checked={selectedOption === option.value}
              onChange={handleOptionChange}
            />
            {option.label}
          </label>
        </div>
      ))}
      <label>
        Note:
        <textarea value={note} onChange={(event) => setNote(event.target.value)} />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}

export default AddEvent