import React from "react";

const LoginForm = props => {
  return (
    <div>
      Login
      <form onSubmit={props.handleSubmit}>
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
export default LoginForm;
