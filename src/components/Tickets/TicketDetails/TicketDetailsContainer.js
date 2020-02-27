import React, { Component } from "react";
import { connect } from "react-redux";
import CreateCommentContainer from "../../Comments/CreateCommentContainer";
import { loadComments } from "../../../actions/comments";
import Comment from "../TicketDetails/Comment";
import { loadRisk } from "../../../actions/risk";

class TicketDetailContainer extends Component {
  componentDidMount() {
    console.log("CONSOLO JAKIE JA MAM PROPSY?", this.props);
    const ticketId = this.props.ticket.id;
    this.props.loadComments(ticketId);
    console.log("co to jest auth", this.props.auth);
    this.props.loadRisk();
  }
  calculateRiskForComments() {
    const commentsAmount = this.props.comments.length;
    if (commentsAmount < 3) {
      return 0;
    } else {
      return 5;
    }
  }

  render() {
    const imageUrl = this.props.ticket.imageUrl;
    const price = this.props.ticket.price;
    const description = this.props.ticket.description;
    // const userNameFromTicket = this.props.ticket.user.username;
    return (
      <div>
        <div>
          {/* <h1>TICKET FROM{this.props.ticket.user.username} </h1> */}
          <h1>TICKET FROM </h1>
          <img class="Concert image" alt="Concert image" src={imageUrl}></img>
        </div>
        <p>price of ticket :{price} euro </p>
        <p>We calculated that the risk of this ticket being a fraud is XX%</p>
        <p>description of ticket :{description}</p>
        <h3>COMMENTS :</h3>
        <CreateCommentContainer />

        {this.props.comments.map(comment => (
          <Comment
            comment={comment.comment}
            userId={comment.id}
            username={comment.user.username}
          />
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

export default connect(mapStateToProps, { loadComments, loadRisk })(
  TicketDetailContainer
);
