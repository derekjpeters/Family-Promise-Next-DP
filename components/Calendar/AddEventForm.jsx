// components/AddEventForm.jsx
import React, { useState } from 'react';

const AddEventForm = ({ onAddEvent }) => {
  const [eventTitle, setEventTitle] = useState('');
  const [eventDate, setEventDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (eventTitle && eventDate) {
      onAddEvent({ title: eventTitle, date: eventDate });
      setEventTitle('');
      setEventDate('');
    }
  };

  return (
    <div className="add-event-form">
      <h3>Add Event</h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor="eventTitle">Title:</label>
        <input
          type="text"
          id="eventTitle"
          value={eventTitle}
          onChange={(e) => setEventTitle(e.target.value)}
        />
        <label htmlFor="eventDate">Date:</label>
        <input
          type="date"
          id="eventDate"
          value={eventDate}
          onChange={(e) => setEventDate(e.target.value)}
        />
        <button type="submit">Add Event</button>
      </form>
    </div>
  );
};

export default AddEventForm;
