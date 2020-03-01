import React, { Component } from "react";
import { connect } from "react-redux";
import CreateCommentContainer from "../../Comments/CreateCommentContainer";
import { loadComments } from "../../../actions/comments";
import Comment from "../TicketDetails/Comment";
import { loadTickets, selectTicket } from "../../../actions/tickets";
import { Link } from "react-router-dom";

class TicketDetailContainer extends Component {
  componentDidMount() {
    this.props.loadComments(this.props.match.params.id);

    console.log("THIS PROPS COMMENTS", this.props.comments);
    const time = this.props.ticket.createdAt;
    // const hour = time.substr(11, 2);
    // console.log("how time looks afer this method", hour);
    // console.log("what do i get as time", time);
    // // this.props.loadRisk();
    // this.props.loadTickets(this.props.event.id);
    this.props.selectTicket(this.props.match.params.id);
  }

  // onClick = async ticketId => {
  //   console.log("this button does something! and this is the id: ", this.props);

  //   try {
  //     this.props.selectTicket(ticketId);
  //     console.log("do i have my ticket id ?", ticketId);
  //   } catch (error) {
  //     console.warn("error test:", error);
  //   }
  // };
  calculateRiskForComments() {
    const commentsAmount = this.props.comments.length;
    if (commentsAmount > 3) {
      return 5;
    } else {
      return 0;
    }
  }

  calculateRiskForPrice() {
    const sumPrice = this.props.tickets.map(ticket => ticket.price);
    const totalPrice = sumPrice.reduce((accumulator, element) => {
      return accumulator + element;
    }, 0);
    const ticketsNumber = this.props.tickets.length;
    const averagePrice = totalPrice / ticketsNumber;
    const ticketPrice = this.props.ticket.price;
    const risk = -1 * ((100 * ticketPrice) / averagePrice - 100);

    if (risk > -10) {
      return risk;
    } else {
      return -10;
    }
  }

  // calculateRiskforTime() {
  //   const time = this.props.ticket.createdAt;
  //   const hour = time.substr(11, 2);
  //   const hourNumber = parseInt(hour);
  //   if (hourNumber > 9 && hourNumber < 17) {
  //     return -10;
  //   } else {
  //     return 10;
  //   }
  // }

  calculateRisk() {
    const riskNumber =
      this.calculateRiskForComments() + this.calculateRiskForPrice();
    // this.calculateRiskforTime();

    const riskNumbertotal = Number.parseFloat(riskNumber).toFixed(0);

    if (riskNumbertotal < 95 && riskNumbertotal > 5) {
      return riskNumbertotal;
    } else if (riskNumbertotal < 5) {
      return 5;
    } else {
      return 95;
    }
  }

  render() {
    const eventId = this.props.match.params.eventId;
    const ticketId = this.props.match.params.id;
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
        {/* <p>iddddd {this.props.match.params.id} </p> */}
        <p>
          We calculated that the risk of this ticket being a fraud is{" "}
          {this.calculateRisk()} %
        </p>
        <p>description of ticket :{description}</p>
        <Link to={`/details/${this.props.match.params.id}`}>
          <button>~ EDIT TICKET DETAILS ~</button>{" "}
        </Link>
        <h3>~ COMMENTS : ~ </h3>
        <CreateCommentContainer ticketId={this.props.match.params.id} />
        <h3> LIST OF COMMENTS :</h3>
        {this.props.comments.map(comment => (
          <div>
            {/* <p>{comment.user.username}</p> */}
            <p>{comment.comment}</p>
          </div>
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
    comments: state.comments.selectedCommentsForOneTicket,
    tickets: state.tickets.allTickets
  };
};

export default connect(mapStateToProps, {
  loadComments,
  loadTickets,
  selectTicket
})(TicketDetailContainer);
