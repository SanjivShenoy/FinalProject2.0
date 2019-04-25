import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { registerUser } from "../actions/authActions";

class SignUp extends Component {
  constructor() {
    super();
    this.state = {
      firstname: "",
      lastname: "",
      email: "",
      password: "",
      user_type: "",
      errors: {}
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  // componentDidMount() {
  //   if (this.props.auth.isAuthenticated) {
  //     this.props.history.push("/dashboard");
  //   }
  // }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    const newUser = {
      firstname: this.state.firstname,
      lastname: this.state.lastname,
      email: this.state.email,
      password: this.state.password,
      user_type: this.state.user_type
    };

    this.props.registerUser(newUser, this.props.history);
  };

  render() {
    const { errors } = this.state;
    document.body.style = "background: black;";
    return (
      <div>
        <div className="text-center">
          <h1 className="m-5 text-center" style={{ color: "white" }}>
            {" "}
            Sign Up{" "}
          </h1>
          <form
            className="form-group"
            action="{{url_for('home')}}"
            method="post"
            noValidate
            onSubmit={this.onSubmit}
          >
            <input
              //   className="form-control"
              type="email"
              name="firstname"
              style={{ width: 400 }}
              placeholder="First Name"
              value={this.state.firstname}
              onChange={this.onChange}
            />
            <p />
            <input
              //   className="form-control"
              type="text"
              name="lastname"
              style={{ width: 400 }}
              placeholder="Last Name"
              value={this.state.lastname}
              onChange={this.onChange}
            />
            <p />
            <input
              //   className="form-control"
              type="email"
              name="email"
              style={{ width: 400 }}
              placeholder="email"
              value={this.state.email}
              onChange={this.onChange}
            />
            <p />
            <div className="text-center">
              <input
                // className="form-control"
                type="password"
                name="password"
                style={{ width: 400 }}
                placeholder="Password"
                value={this.state.password}
                onChange={this.onChange}
              />
            </div>
            <p />
            <FormGroup>
              <h6 style={{ color: "white" }}>User type:</h6>
              <FormGroup check>
                <Label check style={{ color: "white" }}>
                  <input
                    type="radio"
                    name="user_type"
                    onChange={this.onChange}
                    value="Participant"
                  />{" "}
                  Participant
                </Label>
              </FormGroup>
              <FormGroup check>
                <Label check style={{ color: "white" }}>
                  <input
                    type="radio"
                    name="user_type"
                    onChange={this.onChange}
                    value="Volunteer"
                  />{" "}
                  Volunteer
                </Label>
              </FormGroup>
            </FormGroup>

            <button style={{ width: 400 }} className="btn btn-primary">
              Sign Up
            </button>
            <a href="/login">
              <h6 className="m-3" style={{ color: "white" }}>
                <u>Already have an account? Sign In instead</u>
              </h6>
            </a>
          </form>
        </div>
      </div>
    );
  }
}

SignUp.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { registerUser }
)(withRouter(SignUp));
