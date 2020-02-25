import React from "react";

function TicketForm(props) {
  const {
    handleChange,
    handleSubmit,
    values: { image, price, description, eventId }
  } = props;

  return (
    <form onSubmit={handleSubmit}>
      <label>Image</label>
      <input onChange={handleChange} name="image" value={image} />
      <label>Price</label>
      <input onChange={handleChange} name="price" value={price} />
      <label>Description</label>
      <input onChange={handleChange} name="description" value={description} />
      <input type="submit" />
    </form>
  );
}

export default TicketForm;
