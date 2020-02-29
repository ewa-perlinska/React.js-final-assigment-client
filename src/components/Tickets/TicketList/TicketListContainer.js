import React from "react";
import { loadTickets, selectTicket } from "../../../actions/tickets";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import TicketsList from "./TicketList";

class TicketListContainer extends React.Component {
  componentDidMount() {
    this.props.loadTickets(this.props.match.params.id);
  }

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
    const eventId = this.props.match.params;
    return (
      <div>
        {" "}
        <h1>hello{this.props.match.params.id}</h1>
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

// <button
// onClick={() => {
//   this.props.onEdit();
//   this.props.onClick(this.props.id);
//   console.log("does this function gets fired??????????????");
// }}
// >

// (
//   <div>
//     {!this.props.tickets ? (
//       <div>Loading...</div>
//     ) : (
//       <div className="Searcher">
//         <h1> 🎼 TICKETS FOR THIS CONCERT</h1>
//         <h3>HELLOOOOO ID {this.props.match.params}</h3>
//         <h2>~ EVENT NAME ~ {this.props.event.title} ~</h2>
//         <div>
//           {tickets.map(ticket => (
//             <div key={ticket.id}>
//               <img src={ticket.imageUrl}></img>
//               <p>{ticket.price} euro</p>
//               <p>{ticket.description}</p>
//               <Link
//                 to={`/event/${this.props.match.params.id}/tickets/${ticket.id}`}
//               >
//                 <button onClick={() => this.onClick(ticket.id)}>
//                   ~ CHECK TICKET DETAILS ~
//                 </button>{" "}
//               </Link>
//               <button> ~ EDIT TICKET DETAILS ~</button>
//             </div>
//           ))}
//         </div>
//       </div>
//     )}
//   </div>
// );
// }
// }
