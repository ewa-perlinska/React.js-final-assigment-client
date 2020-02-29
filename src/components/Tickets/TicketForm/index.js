import React from "react";

function TicketForm(props) {
  const {
    handleChange,
    handleSubmit,
    values: { imageUrl, price, description }
  } = props;

  return (
    <div>
      <h1>CREATE TICKET FOR THIS CONCERT</h1>
      <form onSubmit={handleSubmit}>
        <label>Image</label>
        <input onChange={handleChange} name="imageUrl" value={imageUrl} />
        <label>Price</label>
        <input onChange={handleChange} name="price" value={price} />
        <label>Description</label>
        <input onChange={handleChange} name="description" value={description} />
        <input type="submit" />
      </form>
    </div>
  );
}

export default TicketForm;
