import React, { Component } from "react";

class Comment extends Component {
  render() {
    console.log("do i have user id ", this.props.userId);

    return (
      <div>
        <p>{this.props.comment}</p>
        <p>{this.props.userId}</p>
      </div>
    );
  }
}

export default Comment;
