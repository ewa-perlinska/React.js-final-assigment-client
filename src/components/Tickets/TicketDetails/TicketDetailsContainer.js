import React, { Component } from "react";
import { connect } from "react-redux";
import CreateCommentContainer from "../../Comments/CreateCommentContainer";
import { loadComments } from "../../../actions/comments";
import Comment from "../TicketDetails/Comment";

class TicketDetailContainer extends Component {
  componentDidMount() {
    console.log("CONSOLO JAKIE JA MAM PROPSY?", this.props);
    const ticketId = this.props.ticket.id;
    this.props.loadComments(ticketId);
    console.log("co to jest auth", this.props.auth);
  }

  render() {
    const image = this.props.ticket.image;
    const price = this.props.ticket.price;
    const description = this.props.ticket.description;

    console.log("COO TO JEST USER ID AUTH?", this.props.user);

    return (
      <div>
        <p>{image}</p>
        <p>{price}</p>
        <p>{description}</p>
        <CreateCommentContainer />
        <p>Comments:</p>
        {this.props.comments.map(comment => (
          <Comment comment={comment.comment} userId={comment.id} />
        ))}
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
    comments: state.comments.selectedCommentsForOneTicket
  };
};

export default connect(mapStateToProps, { loadComments })(
  TicketDetailContainer
);
