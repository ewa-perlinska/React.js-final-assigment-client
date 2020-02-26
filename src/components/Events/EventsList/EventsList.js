import React, { Component } from "react";
import { Link } from "react-router-dom";

class EventsList extends Component {
  render() {
    return (
      <div>
        <div>
          <h2>{this.props.title}</h2>
        </div>
        <img
          class="Concert image"
          alt="Concert image"
          src={this.props.imageUrl}
        ></img>
        <p>{this.props.date}</p>
        <p>{this.props.description}</p>
        <Link to={`/event/${this.props.id}/tickets/`}>
          <button onClick={() => this.props.onClick(this.props.id)}>
            ~ CHECK TICKETS ~
          </button>{" "}
        </Link>
      </div>
    );
  }
}

export default EventsList;
