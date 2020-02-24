import React, { Component } from "react";
import LoginForm from "./LoginForm";
import { connect } from "react-redux";
import { login } from "../../actions/auth";

class LoginContainer extends Component {
  state = {
    email: "",
    password: ""
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    console.log("login handlesubmit state", this.state);
    // console.log("login handlesubmit props", this.props);
    this.props.dispatch(login(this.state.email, this.state.password));
    this.setState({ email: "", password: "" });
  };

  componentDidUpdate(prevProps) {
    if (prevProps.userLoggedIn !== this.props.userLoggedIn) {
      setTimeout(() => this.props.history.push("/"), 1500);
    }
  }

  render() {
    return (
      <div>
        {this.props.userLoggedIn ? (
          <h1>You are logged in</h1>
        ) : (
          <LoginForm
            text="Login"
            values={this.state}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
          />
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log("login state", state);
  return {
    userLoggedIn: state.auth.data !== null
  };
};

export default connect(mapStateToProps)(LoginContainer);
