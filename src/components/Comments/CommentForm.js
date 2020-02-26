import React from "react";

function CommentForm(props) {
  const {
    handleChange,
    handleSubmit,
    values: { comment, eventId, ticketId }
  } = props;

  return (
    <form onSubmit={handleSubmit}>
      <label>LEAVE YOUR OWN COMMENT: </label>
      <input onChange={handleChange} name="comment" value={comment} />
      <input type="submit" />
    </form>
  );
}

export default CommentForm;
