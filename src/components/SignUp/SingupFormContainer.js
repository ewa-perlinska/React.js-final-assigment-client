import React, { Component } from "react";
import SignupForm from "./SingUpForm";
import { connect } from "react-redux";
import { signUp } from "../../actions/auth";

class SignupFormContainer extends Component {
  state = {
    username: "",
    email: "",
    password: ""
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    console.log(this.state);
    this.props.dispatch(
      signUp(this.state.username, this.state.email, this.state.password)
    );
    this.setState({ username: "", email: "", password: "" });
  };

  render() {
    return (
      <div>
        {/* {this.props.userCreated ? <h1>Account created</h1> : null} */}
        <SignupForm
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
          values={this.state}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log("STATE IN MSTP", state);
  return {
    userCreated: state.auth.userCreated
  };
};

export default connect(mapStateToProps)(SignupFormContainer);
