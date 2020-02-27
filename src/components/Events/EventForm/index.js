import React from "react";

function EventForm(props) {
  const {
    handleChange,
    handleSubmit,
    values: { title, imageUrl, date, description }
  } = props;

  // console.log("whaaaat are my values?", props);

  return (
    <form onSubmit={handleSubmit}>
      <label>Title</label>
      <input onChange={handleChange} name="title" value={title} />
      <label>Image</label>
      <input onChange={handleChange} name="imageUrl" value={imageUrl} />
      <label>Date</label>
      <input
        onChange={handleChange}
        name="date"
        type="date"
        min={"2020-02-28"}
        value={date}
      />
      <label>Description</label>
      <input onChange={handleChange} name="description" value={description} />
      <input type="submit" />
    </form>
  );
}

export default EventForm;
