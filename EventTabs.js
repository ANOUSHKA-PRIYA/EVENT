import React, { useState, useEffect } from 'react';
import axios from 'axios';
import EventItem from './EventItem';

const EventTabs = ({ user }) => {
  const [globalEvents, setGlobalEvents] = useState([]);
  const [userEvents, setUserEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const globalResponse = await axios.get('http://localhost:8000/api/events/');
        setGlobalEvents(globalResponse.data);

        if (user) {
          const userResponse = await axios.get(`http://localhost:8000/api/users/${user.id}/events/`);
          setUserEvents(userResponse.data);
        }
      } catch (error) {
        console.error('Error fetching events:', error);
      }
    };

    fetchEvents();
  }, [user]);

  return (
    <div>
      <div className='center-box'>
        <h2>Global Events</h2>
        {globalEvents.map(event => (
          <EventItem key={event.id} event={event} />
        ))}
      </div>
      {user && (
        <div className='center-box'>
          <h2>User-Specific Events</h2>
          {userEvents.map(event => (
            <EventItem key={event.id} event={event} />
          ))}
        </div>
      )}
    </div>
  );
};

export default EventTabs;
