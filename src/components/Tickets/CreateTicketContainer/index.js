import React, { Component } from "react";
import TicketForm from "../TicketForm";
import { connect } from "react-redux";
import { createTicket } from "../../../actions/tickets";
import TicketListContainer from "../TicketList/TicketListContainer";

class CreateTicketContainer extends Component {
  state = {
    image: "",
    price: "",
    description: ""
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    console.log(this.state);

    this.props.dispatch(
      createTicket(this.state.image, this.state.price, this.state.description)
    );
    this.setState({ image: "", price: "", description: "" });
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
  console.log("STATE IN MSTP", state);
  return {
    ticket: state.tickets.selectedTicket
  };
};

export default connect(mapStateToProps)(CreateTicketContainer);
