import React, { useState } from 'react';

const EventForm = () => {
  // State for form fields
  const [eventName, setEventName] = useState('');
  const [eventDate, setEventDate] = useState('');

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform form submission logic here
    console.log('Event form submitted');
  };

  return (
    <div>
      <h2>Add Event</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Event Name:
          <input type="text" value={eventName} onChange={(e) => setEventName(e.target.value)} />
        </label>
        <br />
        <label>
          Event Date:
          <input type="date" value={eventDate} onChange={(e) => setEventDate(e.target.value)} />
        </label>
        <br />
        <button type="submit">Add Event</button>
      </form>
    </div>
  );
};

export default EventForm;
