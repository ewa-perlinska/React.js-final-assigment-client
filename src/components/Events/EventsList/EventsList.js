import React, { Component } from "react";
import { Link } from "react-router-dom";

class EventsList extends Component {
  render() {
    return (
      <div>
        <div>
          <h2>Event: {this.props.title}</h2>
          <Link to={`/event/${this.props.id}/tickets/`}>
            <button onClick={() => this.props.onClick(this.props.id)}>
              Check tickets for that event
            </button>{" "}
          </Link>
        </div>
        <p>{this.props.imageUrl}</p>

        <img
          class="sealImage"
          alt="Image of Seal"
          src={this.props.imageUrl}
        ></img>
        <p>{this.props.id}</p>
        <p>{this.props.date}</p>
        <p>{this.props.description}</p>
      </div>
    );
  }
}

export default EventsList;
