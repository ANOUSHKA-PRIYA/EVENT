import React, { useState, useEffect } from 'react';

const EventList = () => {
  // State for storing event data
  const [events, setEvents] = useState([]);

  // Function to fetch events from the backend
  const fetchEvents = async () => {
    try {
      const response = await fetch('/api/events');
      if (!response.ok) {
        throw new Error('Failed to fetch events');
      }
      const data = await response.json();
      setEvents(data);
    } catch (error) {
      console.error('Error fetching events:', error);
    }
  };

  // useEffect hook to fetch events when the component mounts
  useEffect(() => {
    fetchEvents();
  }, []);

  return (
    <div>
      <h2>Event List</h2>
      <ul>
        {events.map((event) => (
          <li key={event.id}>{event.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default EventList;
