import React, { Component } from "react";
import EventForm from "../EventForm";
import { connect } from "react-redux";
import { createEvent } from "../../../actions/events";

class CreateEventContainer extends Component {
  state = {
    title: "",
    image: "",
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
        this.state.image,
        this.state.date,
        this.state.description
      )
    );
    this.setState({ title: "", image: "", date: "", description: "" });
  };

  render() {
    return (
      <div>
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
    eventCreated: state.event
  };
};

export default connect(mapStateToProps)(CreateEventContainer);
