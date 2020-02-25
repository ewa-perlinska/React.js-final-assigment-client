import React from "react";
import { loadOneEventTickets } from "../../../actions/tickets";
import { connect } from "react-redux";
import TicketsList from "./TicketList";
import CreateTicketContainer from "../CreateTicketContainer";

class TicketListContainer extends React.Component {
  componentDidMount() {
    this.props.loadOneEventTickets();
  }
  // componentDidUpdate() {
  //   this.props.loadTickets();
  // }
  render() {
    return (
      <div>
        {!this.props.tickets ? (
          <div>Loading...</div>
        ) : (
          <div className="Searcher">
            {this.props.tickets.map(ticket => (
              <TicketsList
                key={ticket.id}
                imageUrl={ticket.imageUrl}
                price={ticket.price}
                description={ticket.description}
              />
            ))}
          </div>
        )}
        <CreateTicketContainer />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  tickets: state.tickets.allTickets,
  events: state.events.allEvents,
  event: state.events.selectedEvent
});

export default connect(mapStateToProps, { loadOneEventTickets })(
  TicketListContainer
);
