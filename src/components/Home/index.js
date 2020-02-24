import React from "react";
import { connect } from "react-redux";

function Home(props) {
  return (
    <div>
      {/* {props.events.map(event => (
        <h1>{event.title}</h1>
      ))} */}
    </div>
  );
}

// const mapStateToProps = state => ({ events: state.events });

// export default connect(mapStateToProps)(Home);

export default connect()(Home);
