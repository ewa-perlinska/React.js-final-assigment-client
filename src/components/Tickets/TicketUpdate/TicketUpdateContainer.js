import React from "react";
import { connect } from "react-redux";
import TicketForm from "../TicketForm/index";
import TicketsList from "../TicketList/TicketList";
import {
  loadTickets,
  updateTicket,
  selectTicket
} from "../../../actions/tickets";

class TicketUpdateContainer extends React.Component {
  componentDidMount() {
    const eventId = this.props.event.id;

    this.props.loadTickets(eventId);
  }
  // componentDidUpdate() {
  //   const eventId = this.props.event.id;

  //   this.props.loadTickets(eventId);
  // }

  state = {
    editMode: false,
    formValues: {
      imageUrl: "",
      price: "",
      description: ""
    }
  };

  onClick = async ticketId => {
    // console.log("this button does something! and this is the id: ", this.props);

    try {
      this.props.selectTicket(ticketId);
      // console.log("do i have my ticket id ?", ticketId);
    } catch (error) {
      // console.warn("error test:", error);
    }
  };

  onEdit = () => {
    console.log("does this function gets called?aaaaaa");
    this.setState({
      editMode: true,
      formValues: {
        imageUrl: "",
        price: "",
        description: ""
      }
    });
    // this.props.disptach(selectTicket(this.props.ticket.id));
  };

  onChange = event => {
    // update the formValues property with the new data from the input field
    this.setState({
      formValues: {
        ...this.state.formValues,
        [event.target.name]: event.target.value
      }
    });
  };

  onSubmit = event => {
    event.preventDefault();
    this.props.updateTicket(this.props.event.id, this.state.formValues);
    this.setState({
      editMode: false
    });
  };

  render() {
    if (!this.props) {
      return <p>loading.."</p>;
    } else {
      console.log("what is my props? ", this.props);
      return (
        <div>
          <div>
            {!this.props.tickets ? (
              <div>Loading...</div>
            ) : (
              <div className="Searcher">
                {this.state.editMode === true && (
                  <div>
                    <h1>~ EDIT TICKET FOR THIS CONCERT ~</h1>
                    <TicketForm
                      ticket={this.props.ticket}
                      onSubmit={this.onSubmit}
                      onChange={this.onChange}
                      values={this.state.formValues}
                      onClick={this.onClick}
                    />
                  </div>
                )}

                <h2>~ EVENT NAME ~ {this.props.event.title} ~</h2>
                {this.props.tickets.map(ticket => (
                  <TicketsList
                    id={ticket.id}
                    key={ticket.id}
                    imageUrl={ticket.imageUrl}
                    price={ticket.price}
                    description={ticket.description}
                    eventId={this.props.event.id}
                    onClick={this.onClick}
                    onEdit={this.onEdit}
                  />
                ))}
              </div>
            )}
          </div>
          );
        </div>
      );
    }
  }
}

const mapStateToProps = state => ({
  tickets: state.tickets.allTickets,
  events: state.events.allEvents,
  event: state.events.selectedEvent,
  ticket: state.tickets.selectTicket
});
export default connect(mapStateToProps, {
  updateTicket,
  loadTickets,
  selectTicket
})(TicketUpdateContainer);

// {this.state.editMode === true && (
//   <div>
//     Edit event:
//     <TicketForm
//       ticket={this.props.ticket}
//       onSubmit={this.onSubmit}
//       onChange={this.onChange}
//       values={this.state.formValues}
//     />
//   </div>
// )}
