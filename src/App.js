import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import SignupContainer from "./components/SignUp/SingupFormContainer";
import LoginContainer from "./components/Login/LoginContainer";
import Home from "./components/Home/index";
import EventFormContainer from "./components/Events/CreateEventContainer";

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
            <Link to="/events/new">
              <li>Create Event</li>
            </Link>
          </Link>
        </nav>
        <Route exact path="/" component={Home} />
        <Route exact path="/signup" component={SignupContainer} />
        <Route exact path="/login" component={LoginContainer} />
        <Route exact path="/events/new" component={EventFormContainer} />
      </Router>
    </div>
  );
}

export default App;
