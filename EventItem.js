import React from 'react';
import axios from 'axios';

const EventItem = ({ event }) => {
  const handleLike = async () => {
    try {
      // Send a request to like the event
      await axios.post(`http://localhost:8000/api/events/${event.id}/like`);
      // Update the UI or state to reflect the like
    } catch (error) {
      console.error('Error liking event:', error);
    }
  };

  const handleUnlike = async () => {
    try {
      // Send a request to unlike the event
      await axios.delete(`http://localhost:8000/api/events/${event.id}/like`);
      // Update the UI or state to reflect the unlike
    } catch (error) {
      console.error('Error unliking event:', error);
    }
  };

  return (
    <div className="event-item">
      <h3>{event.name}</h3>
      <p>Date: {event.date}</p>
      <p>Time: {event.time}</p>
      <p>Location: {event.location}</p>
      <button onClick={handleLike}>Like</button>
      <button onClick={handleUnlike}>Unlike</button>
    </div>
  );
};

export default EventItem;
