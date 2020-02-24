import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Signup from "./components/SignUp/index";

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
        </nav>

        <Route exact path="/" component={Test} />
        <Route exact path="/signup" component={Signup} />
      </Router>
    </div>
  );
}

export default App;
