import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import SignupContainer from "./components/SignUp/SingupFormContainer";
import LoginContainer from "./components/Login/LoginContainer";
import EventsListContainer from "./components/Events/EventsList/EventsListContainer";
import EventFormContainer from "./components/Events/CreateEventContainer";
import TicketListConatiner from "./components/Tickets/CreateTicketContainer";

function App() {
  return (
    <div className="App">
      <Router>
        <nav>
          <Link to="/">
            <li>HOME</li>
          </Link>
          <Link to="/signup">
            <li>Sign up!</li>
          </Link>
          <Link to="/login">
            <li>Login!</li>
            <Link to="/event/new">
              <li>Create Event</li>
            </Link>
            <Link to="/event">
              <li>Look at all events</li>
            </Link>
          </Link>
        </nav>
        <Route exact path="/event" component={EventsListContainer} />
        <Route exact path="/signup" component={SignupContainer} />
        <Route exact path="/login" component={LoginContainer} />
        <Route exact path="/event/new" component={EventFormContainer} />
        <Route
          exact
          path="/event/:id/tickets"
          component={TicketListConatiner}
        />
      </Router>
    </div>
  );
}

export default App;
