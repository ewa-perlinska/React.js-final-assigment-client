import React, { Component } from "react";
import { Link } from "react-router-dom";

class TicketsList extends Component {
  render() {
    return (
      <div>
        <div>
          <h2>Event: {this.props.title}</h2>
          <Link to={`/event/${this.props.eventId}/ticket/${this.props.id}`}>
            <button onClick={() => this.props.onClick(this.props.id)}>
              Check ticket
            </button>{" "}
          </Link>
        </div>

        <p>{this.props.image}</p>
        <p>{this.props.price}</p>
        <p>{this.props.description}</p>
      </div>
    );
  }
}

export default TicketsList;
