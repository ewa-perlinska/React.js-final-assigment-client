import React from "react";
import { loadTickets } from "../../../actions/tickets";
import { connect } from "react-redux";
import TicketsList from "./TicketList";

class TicketListContainer extends React.Component {
  componentDidMount() {
    console.log("JAKIE JA MAM PROPY?", this.props.event);
    const eventId = this.props.event.id;
    console.log("do i have event id in ticket component?", eventId);

    this.props.loadTickets(eventId);
  }
  render() {
    return (
      <div>
        {!this.props.tickets ? (
          <div>Loading...</div>
        ) : (
          <div className="Searcher">
            <p>Events name :{this.props.event.title}</p>
            {this.props.tickets.map(ticket => (
              <TicketsList
                id={ticket.id}
                key={ticket.id}
                imageUrl={ticket.imageUrl}
                price={ticket.price}
                description={ticket.description}
                eventId={this.props.event.id}
              />
            ))}
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  tickets: state.tickets.allTickets,
  events: state.events.allEvents,
  event: state.events.selectedEvent
});

export default connect(mapStateToProps, { loadTickets })(TicketListContainer);
