import React, { Component } from "react";
import TicketForm from "../TicketForm";
import { connect } from "react-redux";
import { createTicket } from "../../../actions/tickets";

class CreateTicketContainer extends Component {
  componentDidMount() {
    console.log(
      "waaaaaaaaat do i get as propssss here ??!!!?!?! ",
      this.props.eventId
    );
  }
  state = {
    imageUrl: "",
    price: "",
    description: ""
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
        this.props.eventId
      )
    );
    this.setState({ imageUrl: "", price: "", description: "" });
  };

  render() {
    return (
      <div>
        <TicketForm
          values={this.state}
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
        />
        <div>{this.props.createTicket}</div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log("STATE IN MSTP whaaaat do i have????", state);
  return {
    events: state.events.allEvents,
    event: state.events.selectedEvent,
    ticket: state.tickets.selectedTicket
  };
};

export default connect(mapStateToProps)(CreateTicketContainer);
