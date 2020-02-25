import React, { Component } from "react";
import { Link } from "react-router-dom";

class EventsList extends Component {
  render() {
    return (
      <div>
        <div>
          <h2>Event: {this.props.title}</h2>
          <Link to={`/event/${this.props.id}`}>
            <button onClick={() => this.props.onClick(this.props.id)}>
              Check tickets for that event
            </button>{" "}
          </Link>
        </div>
        <p>{this.props.image}</p>
        <p>{this.props.id}</p>
        <p>{this.props.date}</p>
        <p>{this.props.description}</p>
      </div>
    );
  }
}

export default EventsList;
