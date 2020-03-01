import React, { Component } from "react";
import CommentForm from "./CommentForm";
import { connect } from "react-redux";
import { createComment, loadComments } from "../../actions/comments";

class CreateCommentContainer extends Component {
  state = {
    comment: ""
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();

    console.log("what is my state here?????", this.state);

    this.props.createComment(this.state.comment, this.props.ticketId);
    this.setState({ comment: "" });
    this.props.loadComments(this.props.ticketId);
  };

  render() {
    return (
      <div>
        <CommentForm
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
    events: state.events.allEvents,
    event: state.events.selectedEvent,
    ticket: state.tickets.selectedTicket
  };
};

export default connect(mapStateToProps, { createComment, loadComments })(
  CreateCommentContainer
);
