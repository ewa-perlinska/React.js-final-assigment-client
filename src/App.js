import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

function Test() {
  return <h1>Hello!</h1>;
}

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={Test} />
      </Router>
    </div>
  );
}

export default App;
