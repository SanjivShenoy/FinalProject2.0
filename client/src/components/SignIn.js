import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";
import PropTypes from "prop-types";
// import { withRouter } from "react-router-dom";
import { getUserById, postUserById } from "../actions/userActions";
import { connect } from "react-redux";
import { loginUser } from "../actions/authActions";

class SignIn extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      // user_type: "",
      errors: {},
      userId : "",
      user_type : ""
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  // componentDidMount() {
  //   if (this.props.auth.isAuthenticated) {
  //     this.props.history.push("/dashboard");
  //   }
  // }

  componentDidMount() {
    this.props.getUserById(this.state.userId);
    console.log(this.props.auth)

      // if (this.props.auth.isAuthenticated) {
      //   // const { user1, loading2 } = this.props.user_reducer;
      //   console.log(this.state);
      //   console.log("I have no clue")
      //   // if(!loading2)
      //   {
      //     console.log('booo')
      //     if(this.props.auth.user_type === "Volunteer")
      //     {
      //       this.props.history.push(`/${this.props.auth.user}/dashboardVol`);
      //     }
      //     else {
      //       this.props.history.push(`/${this.props.auth.user}/dashboard`);
      //     }
      //   }
      // }

    //   if (this.props.errors) {
    //     console.log(this.props.errors);
    //     this.setState({ errors: this.props.errors });
    //   }
    // }
  }

  onSubmit = e => {
    e.preventDefault();
    const userData = {
      email: this.state.email,
      password: this.state.password,
      // user_type: this.state.user_type
    };
    if (
      this.state.email === "admin@system" &&
      this.state.password === "admin"
    ) {
      this.props.history.push("/admin");
    }
    this.props.loginUser(userData); //, this.props.history
    
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    console.log(this.props.auth)
    // if (
    //   this.state.email === "admin@system" &&
    //   this.state.password === "admin"
    // ) {
    //   this.props.history.push("/admin");
    // }
    if (this.props.auth.isAuthenticated) {
        console.log(this.state);
        console.log("I have no clue")
        {
          console.log('booo')
          if(this.props.auth.user.user_type === "Volunteer")
          {
            this.props.history.push(`/${this.props.auth.user._id}/dashboardVol`);
          }
          else {
            this.props.history.push(`/${this.props.auth.user._id}/dashboard`);
          }
        }
      }
    const { errors } = this.state;
    document.body.style = "background: black;";
    return (
      <div>
        <div className="text-center">
          <h1 className="m-5 text-center" style={{ color: "white" }}>
            {" "}
            Sign In{" "}
          </h1>
          <form
            className="form-group"
            //action="{{url_for('home')}}"
            method="post"
            // noValidate
            onSubmit={this.onSubmit}
          >
            <div className="text-center">
              <input
                //   className="form-control"
                type="email"
                name="email"
                style={{ width: 400 }}
                placeholder="Email"
                value={this.state.email}
                onChange={this.onChange}
              />
            </div>
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

            <button
              id="SignIn"
              type="submit"
              style={{ width: 400 }}
              className="container-xl btn btn-primary col-20"
            >
              Sign In
            </button>
            <a href="/signup">
              <h6 className="m-3" style={{ color: "white" }}>
                <u>Don't have an account? Sign Up instead</u>
              </h6>
            </a>
          </form>
        </div>
      </div>
    );
  }
}

SignIn.propTypes = {
  loginUser: PropTypes.func.isRequired,
  getUserById : PropTypes.func.isRequired,
  user_reducer: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors,

});

export default connect(
  mapStateToProps,
  { loginUser,getUserById }
)(SignIn);
