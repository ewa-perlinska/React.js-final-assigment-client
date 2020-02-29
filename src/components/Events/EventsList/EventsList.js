import React from "react";
import { loadEvents, selectEvent } from "../../../actions/events";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class EventsList extends React.Component {
  componentDidMount() {
    console.log("WHAT IS MY EVENTS?", this.props.events);

    this.props.loadEvents();
  }
  onClick = async eventId => {
    console.log("IS THIS SENDING RIGHT ID ???????? ", this.props);

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
              <div key={event.id}>
                <h2>~{event.title}~</h2>
                <img src={event.imageUrl} alt="event image"></img>
                <p>{event.description}</p>
                <Link to={`/event/${event.id}`}>
                  link{" "}
                  {/* <button onClick={() => this.onClick(event.id)}>
                    ~ CHECK TICKETS ~
                  </button>{" "} */}
                </Link>
              </div>
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
  EventsList
);

{
  /* <EventsList
  title={event.title}
  key={event.id}
  imageUrl={event.imageUrl}
  date={event.date}
  description={event.description}
  id={event.id}
  onClick={this.onClick}
/>; */
}
