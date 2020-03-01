import React, { Component } from "react";
import EventForm from "../EventForm";
import { connect } from "react-redux";
import { createEvent } from "../../../actions/events";

class CreateEventContainer extends Component {
  state = {
    title: "",
    imageUrl: "",
    date: "",
    description: ""
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    console.log(this.state);

    this.props.dispatch(
      createEvent(
        this.state.title,
        this.state.imageUrl,
        this.state.date,
        this.state.description
      )
    );
    this.setState({ title: "", imageUrl: "", date: "", description: "" });
  };

  render() {
    return (
      <div>
        <h1> 🎼 CREATE EVENT </h1>
        <h3>~ ENTER INFORMATION ABOUT EVENT BELOW ~</h3>
        <EventForm
          values={this.state}
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
        />
        <div>{this.props.createEvent}</div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log("STATE IN MSTP", state);
  return {
    event: state.events.selectedEvent
  };
};

export default connect(mapStateToProps)(CreateEventContainer);
