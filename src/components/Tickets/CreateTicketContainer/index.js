import React, { Component } from "react";
import TicketForm from "../TicketForm";
import { connect } from "react-redux";
import { createTicket, loadTickets } from "../../../actions/tickets";

class CreateTicketContainer extends Component {
  componentDidMount() {
    const eventId = this.props.event.id;

    this.props.loadTickets(eventId);
  }
  // componentDidUpdate() {
  //   const eventId = this.props.event.id;

  //   this.props.loadTickets(eventId);
  // }
  state = {
    imageUrl: "",
    price: "",
    description: "",
    eventId: ""
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();

    console.log("what is my state here?????", this.state);

    this.props.dispatch(
      createTicket(
        this.state.imageUrl,
        this.state.price,
        this.state.description,
        this.props.event.id
      )
    );
    this.setState({ imageUrl: "", price: "", description: "", eventId: "" });
  };

  render() {
    return (
      <div>
        <h1>CREATE TICKET FOR THIS CONCERT</h1>
        <div>
          <TicketForm
            values={this.state}
            handleSubmit={this.handleSubmit}
            handleChange={this.handleChange}
          />
          <div>{this.props.createTicket}</div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log("STATE IN MSTP", state);
  return {
    events: state.events.allEvents,
    event: state.events.selectedEvent,
    ticket: state.tickets.selectedTicket
  };
};

export default connect(mapStateToProps, { loadTickets, createTicket })(
  CreateTicketContainer
);
