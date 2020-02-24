import React from "react";
import { loadEvents } from "../../../actions/events";
import { connect } from "react-redux";
import EventsList from "./EventsList";

class EventsListContainer extends React.Component {
  componentDidMount() {
    console.log("this.props.events?????", this.props.events);

    this.props.loadEvents();
  }
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
              />
            ))}
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  events: state.events.allEvents
});

export default connect(mapStateToProps, { loadEvents })(EventsListContainer);
