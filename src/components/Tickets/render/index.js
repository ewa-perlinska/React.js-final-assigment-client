import React from "react";
import { connect } from "react-redux";

import TicketListContainer from "../TicketList/TicketListContainer";
import CreateTicketContainer from "../CreateTicketContainer";

function Tickets(props) {
  return (
    <div>
      <CreateTicketContainer></CreateTicketContainer>
      <TicketListContainer></TicketListContainer>
    </div>
  );
}

export default connect()(Tickets);
