import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import SignupContainer from "./components/SignUp/SingupFormContainer";
import LoginContainer from "./components/Login/LoginContainer";
import EventsList from "./components/Events/EventsList/EventsList";
import EventFormContainer from "./components/Events/CreateEventContainer";
import Tickets from "./components/Tickets/TicketRender/index";
import TicketDetailsContainer from "./components/Tickets/TicketDetails/TicketDetailsContainer";

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
            <Link to="/event/new">
              <li>~ CREATE EVENT ~ </li>
            </Link>
          </Link>
        </nav>
        <Route exact path="/event" component={EventsList} />
        <Route exact path="/signup" component={SignupContainer} />
        <Route exact path="/login" component={LoginContainer} />
        <Route exact path="/event/new" component={EventFormContainer} />
        <Route exact path="/event/:id/tickets" component={Tickets} />
        <Route
          exact
          path="/event/:id/ticket/:id"
          component={TicketDetailsContainer}
        />
      </Router>
    </div>
  );
}

export default App;
