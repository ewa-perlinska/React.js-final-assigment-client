import React, { Component } from "react";
import { Link } from "react-router-dom";

class TicketsList extends Component {
  render() {
    return (
      <div>
        <p>{this.props.image}</p>
        <p>{this.props.price}</p>
        <p>{this.props.description}</p>
      </div>
    );
  }
}

export default TicketsList;
