import React, { Component } from "react";
import { Link } from "react-router-dom";

class EventsList extends Component {
  render() {
    console.log(this.props.title);

    return (
      <div>
        <Link to="/ticket">
          <li>{this.props.title}</li>
        </Link>
        <p>{this.props.image}</p>
        <p>{this.props.date}</p>
        <p>{this.props.description}</p>
      </div>
    );
  }
}

export default EventsList;
