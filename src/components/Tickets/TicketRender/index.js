// import React, { Component } from "react";
// import { connect } from "react-redux";
// import { loadTickets } from "../../../actions/tickets";

// import TicketListContainer from "../TicketList/TicketListContainer";
// import CreateTicketContainer from "../CreateTicketContainer";
// import TicketUpdateContainer from "../TicketUpdate/TicketUpdateContainer";

// class Tickets extends Component {
//   componentDidMount() {
//     const eventId = this.props.event.id;

//     this.props.loadTickets(eventId);
//   }

//   render() {
//     return (
//       <div>
//         <h1> 🎼 TICKETS FOR THIS CONCERT</h1>
//         <CreateTicketContainer></CreateTicketContainer>
//         <TicketListContainer></TicketListContainer>
//         <TicketUpdateContainer></TicketUpdateContainer>
//       </div>
//     );
//   }
// }

// const mapStateToProps = state => ({
//   tickets: state.tickets.allTickets,
//   events: state.events.allEvents,
//   event: state.events.selectedEvent,
//   ticket: state.tickets.selectTicket
// });
// export default connect(mapStateToProps, { loadTickets })(Tickets);
