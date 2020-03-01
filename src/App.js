import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import SignupContainer from "./components/SignUp/SingupFormContainer";
import LoginContainer from "./components/Login/LoginContainer";
import EventsListContainer from "./components/Events/EventsList/EventsListContainer";
import EventFormContainer from "./components/Events/CreateEventContainer";
import CreateTicketContainer from "./components/Tickets/CreateTicketContainer";
import TicketDetailsContainer from "./components/Tickets/TicketDetails/TicketDetailsContainer";
import TicketsListContainer from "./components/Tickets/TicketList/TicketListContainer";
import TicketUpdateContainer from "./components/Tickets/TicketUpdate/TicketUpdateContainer";

function App() {
  return (
    <div className="App">
      <Router>
        <nav>
          <Link to="/event">
            <li>~ HOME PAGE ~ LOOK AT ALL EVENTS</li>
          </Link>
          <Link to="/signup">
            <li>~ SIGN UP ~ </li>
          </Link>
          <Link to="/login">
            <li>~ LOGIN ~</li>
            <Link to="/createEvent">
              <li>~ CREATE EVENT ~ </li>
            </Link>
          </Link>
        </nav>
        <Route exact path="/event" component={EventsListContainer} />
        <Route exact path="/signup" component={SignupContainer} />
        <Route exact path="/login" component={LoginContainer} />
        <Route exact path="/createEvent" component={EventFormContainer} />
        <Route exact path="/event/:id" component={TicketsListContainer} />
        <Route exact path="/ticket/:id" component={TicketDetailsContainer} />
        <Route exact path="/details/:id" component={TicketUpdateContainer} />
      </Router>
    </div>
  );
}

export default App;
