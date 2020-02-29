import React from "react";
import { loadTickets, selectTicket } from "../../../actions/tickets";
import { connect } from "react-redux";
import TicketsList from "./TicketList";
import CreateTicketContainer from "../CreateTicketContainer";

class TicketListContainer extends React.Component {
  componentDidMount() {
    this.props.loadTickets(this.props.match.params.id);
  }

  onClick = async ticketId => {
    console.log("this button does something! and this is the id: ", this.props);

    try {
      this.props.selectTicket(ticketId);
      console.log("do i have my ticket id ?", ticketId);
    } catch (error) {
      console.warn("error test:", error);
    }
  };

  render() {
    return (
      <div>
        {!this.props.tickets ? (
          <div>Loading...</div>
        ) : (
          <div className="Searcher">
            <CreateTicketContainer eventId={this.props.match.params.id} />
            <h1> 🎼 TICKETS FOR THIS CONCERT</h1>
            <h2>~ EVENT NAME ~ {this.props.event.title} ~</h2>
            <h1>hello {this.props.match.params.id}</h1>
            {this.props.tickets.map(ticket => (
              <TicketsList
                id={ticket.id}
                key={ticket.id}
                imageUrl={ticket.imageUrl}
                price={ticket.price}
                description={ticket.description}
                eventId={this.props.event.id}
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
  tickets: state.tickets.allTickets,
  events: state.events.allEvents,
  event: state.events.selectedEvent
});

export default connect(mapStateToProps, { loadTickets, selectTicket })(
  TicketListContainer
);
