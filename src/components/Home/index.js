import React from "react";
import { connect } from "react-redux";
import EventsListContainer from "../Events/EventsList/EventsListContainer";

function Home(props) {
  return (
    <div>
      <EventsListContainer />
    </div>
  );
}

export default connect()(Home);
