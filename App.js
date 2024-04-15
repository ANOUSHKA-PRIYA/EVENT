import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';
import EventList from './components/EventList';
import EventForm from './components/EventForm';
import Dashboard from './components/Dashboard';
import { AuthenticatedRoute, UnauthenticatedRoute } from './AuthenticatedComponents';

function App() {
  const isAuthenticated = false; // Replace false with your actual authentication logic

  return (
    <Router>
      <div className="App">
        <UnauthenticatedRoute
          exact
          path="/login"
          component={LoginForm}
          isAuthenticated={isAuthenticated}
        />
        <UnauthenticatedRoute
          exact
          path="/register"
          component={RegisterForm}
          isAuthenticated={isAuthenticated}
        />
        <AuthenticatedRoute
          exact
          path="/dashboard"
          component={Dashboard}
          isAuthenticated={isAuthenticated}
        />
        <AuthenticatedRoute
          exact
          path="/events"
          component={EventList}
          isAuthenticated={isAuthenticated}
        />
        <AuthenticatedRoute
          exact
          path="/add-event"
          component={EventForm}
          isAuthenticated={isAuthenticated}
        />
      </div>
    </Router>
  );
}

export default App;
