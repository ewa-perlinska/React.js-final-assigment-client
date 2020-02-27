import React, { Component } from "react";

class Comment extends Component {
  render() {
    console.log("do i have user id ", this.props.userId);

    return (
      <div>
        <h3>
          ~ Comment ~
          <p>
            {" "}
            {this.props.comment} <p>from : {this.props.username}</p>
          </p>
        </h3>
      </div>
    );
  }
}

export default Comment;
