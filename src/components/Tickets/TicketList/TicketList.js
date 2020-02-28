import React, { Component } from "react";
import { Link } from "react-router-dom";
import TicketForm from "../TicketForm/index";
import { loadTickets } from "../../../actions/tickets";
// import { loadTickets, updateTicket } from "../../../actions/tickets";
import { connect } from "react-redux";

class TicketsList extends Component {
  componentDidMount() {
    this.props.loadTickets();
  }

  render() {
    console.log("DOOOOO I HAVE MY PROPS", this.props);
    return (
      <div>
        <div>
          <h2> {this.props.title}</h2>

          <img
            class="Concert image"
            alt="Concert image"
            src={this.props.imageUrl}
          ></img>
        </div>
        <p>{this.props.price} euro </p>
        <p>{this.props.description}</p>

        <Link to={`/event/${this.props.eventId}/ticket/${this.props.id}`}>
          <button onClick={() => this.props.onClick(this.props.id)}>
            ~ CHECK TICKET DETAILS ~
          </button>{" "}
        </Link>
        <button
          onClick={() => {
            this.props.onEdit();
            this.props.onClick(this.props.id);
            console.log("does this function gets fired??????????????");
          }}
        >
          {" "}
          ~ EDIT TICKET DETAILS ~
        </button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log("STATE IN MSTP tutaaaaaaj", state);
  return {
    user: state.auth.data,
    events: state.events.allEvents,
    event: state.events.selectedEvent,
    ticket: state.tickets.selectedTicket,
    comments: state.comments.selectedCommentsForOneTicket,
    tickets: state.tickets.allTickets
  };
};

export default connect(mapStateToProps, { loadTickets })(TicketsList);

// {this.props.mode === true && (
//   <div>
//     EDIT EVENT
//     <TicketForm
//       ticket={this.props.ticket}
//       onSubmit={this.onSubmit}
//       onChange={this.onChange}
//       values={this.state.formValues}
//     />
//   </div>
// )}
// </div>

{
  /* <button onClick={this.onEdit}>~ EDIT TICKET ~</button>
{this.state.editMode === true && (
  <div>
    ~ EDIT TICKET ~
    <TicketForm
      values={this.state}
      handleSubmit={this.handleSubmit}
      handleChange={this.handleChange}
    />
  </div>
)} */
}
