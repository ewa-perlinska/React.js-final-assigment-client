import React from "react";
import { loadTickets } from "../../../actions/tickets";
import { connect } from "react-redux";
import TicketsList from "./TicketList";

class TicketListContainer extends React.Component {
  componentDidMount() {
    this.props.loadTickets();
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
      </div>
    );
  }
}

const mapStateToProps = state => ({
  tickets: state.tickets.allTickets
});

export default connect(mapStateToProps, { loadTickets })(TicketListContainer);
