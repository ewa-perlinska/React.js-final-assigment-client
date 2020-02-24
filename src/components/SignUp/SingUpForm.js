import React, { Component } from "react";

const SignupForm = props => {
  return (
    <div>
      Signup
      <form onSubmit={props.handleSubmit}>
        <label>User:</label>

        <input
          onChange={props.handleChange}
          type="text"
          name="username"
          value={props.values.username}
        />
        <label>Email:</label>

        <input
          onChange={props.handleChange}
          type="email"
          name="email"
          value={props.values.email}
        />

        <label>Password:</label>
        <input
          onChange={props.handleChange}
          type="password"
          name="password"
          value={props.values.password}
        />
        <input type="submit" />
      </form>
    </div>
  );
};

export default SignupForm;
