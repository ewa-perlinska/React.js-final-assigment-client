import React from "react";
import { loadEvents, selectEvent } from "../../../actions/events";
import { connect } from "react-redux";
import EventsList from "./EventsList";

class EventsListContainer extends React.Component {
  componentDidMount() {
    console.log("WHAT IS MY EVENTS?", this.props.events);

    this.props.loadEvents();
  }

  onClick = async eventId => {
    console.log("this button does something! and this is the id: ", this.props);

    try {
      this.props.selectEvent(eventId);
    } catch (error) {
      console.warn("error test:", error);
    }
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

export default connect(mapStateToProps, { loadEvents, selectEvent })(
  EventsListContainer
);
