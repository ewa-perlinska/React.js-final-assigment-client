import React, { Component } from "react";
import { connect } from "react-redux";
import CreateCommentContainer from "../../Comments/CreateCommentContainer";

class TicketDetailContainer extends Component {
  componentDidMount() {
    console.log("what ia my this.props.ticket", this.props.ticket);
  }

  render() {
    const image = this.props.ticket.image;
    const price = this.props.ticket.price;
    const description = this.props.ticket.description;
    return (
      <div>
        <div>
          <p>{image}</p>
          <p>{price}</p>
          <p>{description}</p>
        </div>
        <CreateCommentContainer />
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

export default connect(mapStateToProps)(TicketDetailContainer);
