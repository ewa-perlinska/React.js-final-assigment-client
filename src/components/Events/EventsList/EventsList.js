import React, { Component } from "react";
import { Link } from "react-router-dom";

class EventsList extends Component {
  eventsRender = events => {
    return events.map(event => (
      <Link to={`/event/${event.id}`}>{event.name}</Link>
    ));
  };
  render() {
    return <div>{this.eventsRender(this.props.events)}</div>;
  }
}

export default EventsList;
