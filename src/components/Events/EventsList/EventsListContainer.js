import React from "react";
import { loadEvents } from "../../../actions/events";
import { connect } from "react-redux";
import EventsList from "./EventsList";
import { loadOneEventTickets } from "../../../actions/tickets";

class EventsListContainer extends React.Component {
  componentDidMount() {
    console.log("this.props.events?????", this.props.events);
    this.props.loadEvents();
  }

  onClick = async eventId => {
    console.log("what is eventId", eventId);
    console.log("this button does something! and this is the id: ", this.props);
    this.props.loadOneEventTickets(eventId);
  };

  render() {
    return (
      <div>
        {!this.props.events ? (
          <div>Loading...</div>
        ) : (
          <div className="Searcher">
            {this.props.events.map(event => (
              <EventsList
                title={event.title}
                key={event.id}
                imageUrl={event.imageUrl}
                date={event.date}
                description={event.description}
                id={event.id}
                onClick={this.onClick}
              />
            ))}
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  events: state.events.allEvents,
  event: state.events.selectedEvent
});

export default connect(mapStateToProps, { loadEvents, loadOneEventTickets })(
  EventsListContainer
);
