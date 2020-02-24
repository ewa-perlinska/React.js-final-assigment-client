import React, { Component } from "react";

const SignupForm = props => {
  return (
    <div>
      Signup
      <form>
        <label>Email:</label>
        <input type="email" name="email" />
        <label>Password:</label>
        <input type="text" name="password" />
        <input type="submit" />
      </form>
    </div>
  );
};

export default SignupForm;
