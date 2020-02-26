import React, { Component } from "react";
import { Link } from "react-router-dom";

class TicketsList extends Component {
  render() {
    console.log("DOOOOO I HAVE MY PROPS", this.props);
    return (
      <div>
        <div>
          <h2> {this.props.title}</h2>

          <img
            class="Concert image"
            alt="Concert image"
            src={this.props.imageUrl}
          ></img>
        </div>
        <p>{this.props.price} euro </p>
        <p>{this.props.description}</p>
        <Link to={`/event/${this.props.eventId}/ticket/${this.props.id}`}>
          <button onClick={() => this.props.onClick(this.props.id)}>
            Check ticket
          </button>{" "}
        </Link>
      </div>
    );
  }
}

export default TicketsList;
