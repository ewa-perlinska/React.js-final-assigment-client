import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import SignupContainer from "./components/SignUp/SingupFormContainer";
import LoginContainer from "./components/Login/LoginContainer";

function Test() {
  return <h1>Hello!</h1>;
}

function App() {
  return (
    <div className="App">
      <Router>
        <nav>
          <Link to="/signup">
            <li>Sign up!</li>
          </Link>
          <Link to="/login">
            <li>Login!</li>
          </Link>
        </nav>

        <Route exact path="/" component={Test} />
        <Route exact path="/signup" component={SignupContainer} />
        <Route exact path="/login" component={LoginContainer} />
      </Router>
    </div>
  );
}

export default App;
