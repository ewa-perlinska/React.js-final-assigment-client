import React from "react";
import { loadEvents } from "../actions/events";
import { connect } from "react-redux";
import EventsList from "./EventsList";

class EventsListContainer extends React.Component {
  componentDidMount() {
    this.props.loadEvents();
  }
  render() {
    if (!this.props.events) {
      return "Loading...";
    }

    return (
      <div>
        <EventsList events={this.props.events} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  events: state.events.allEvents
});
export default connect(mapStateToProps, { loadEvents })(EventsListContainer);
