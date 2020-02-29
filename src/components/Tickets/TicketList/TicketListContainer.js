import React from "react";
import { loadTickets, selectTicket } from "../../../actions/tickets";
import { connect } from "react-redux";
import TicketsList from "./TicketList";
import TicketUpdateContainer from "../TicketUpdate/TicketUpdateContainer";

class TicketListContainer extends React.Component {
  // componentDidMount() {
  //   // console.log("JAKIE JA MAM PROPY?", this.props.event);
  //   const eventId = this.props.event.id;
  //   console.log("do i have event id in ticket component?", eventId);
  //   // console.log("JAKIE JA MAM PROPSY ???????????", this.props.tickets);
  //   this.props.loadTickets(eventId);
  //   // const ticket = this.props.tickets.map(ticket => ticket);
  //   // console.log("co to jest ticket here????");
  // }

  onClick = async ticketId => {
    // console.log("this button does something! and this is the id: ", this.props);

    try {
      this.props.selectTicket(ticketId);
      console.log("do i have my ticket id ?", ticketId);
    } catch (error) {
      // console.warn("error test:", error);
    }
  };

  render() {
    return (
      <div>
        {!this.props.tickets ? (
          <div>Loading...</div>
        ) : (
          <div className="Searcher">
            <h1> 🎼 TICKETS FOR THIS CONCERT</h1>
            <h2>~ EVENT NAME ~ {this.props.event.title} ~</h2>
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
  event: state.events.selectedEvent,
  ticket: state.tickets.selectTicket
});

export default connect(mapStateToProps, {
  loadTickets,
  selectTicket
})(TicketListContainer);

// onEdit = () => {
//   console.log("does this function gets called?");
//   this.setState({
//     editMode: true,
//     formValues: {
//       name: this.props.event.name,
//       date: this.props.event.date,
//       description: this.props.event.description
//     }
//   });
//   console.log("what is this props name", this.props.event.name);
// };
