import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";
import { Col, Row } from "reactstrap";
import { addProgram } from "../actions/authActions";
import { getUsers } from "../actions/authActions";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

class NewProgram extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      //password: "",
      // user_type: "",
      description: "",
      startTime: "",
      endTime: "",
      manager: "",
      partcap: "",
      isOpen: false,
      errors: {},
      venue: ""
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  componentDidMount() {
    this.props.getUsers();
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }
  onSelect = e => {
    this.setState({manager: e.target.value})
  }
  toggleOpen = () => this.setState({ isOpen: !this.state.isOpen });

  onSubmit = e => {
    e.preventDefault();

    const newProg = {
      name: this.state.name,
      description: this.state.description,
      startTime: this.state.startTime,
      endTime: this.state.endTime,
      managers: [this.state.manager],
      partcap: this.state.partcap,
      venue: this.state.venue
      //user_type: this.state.user_type
    };

    this.props.addProgram(newProg, this.props.history.push('/admin'));
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const menuClass = `dropdown-menu${this.state.isOpen ? " show" : ""}`;
    document.body.style = "background: white;";
    const { users, loading } = this.props.profile;
    let showCONTENT;
    if (users === null || loading) {
      showCONTENT = <h4>loading...</h4>;
    } else {
      // console.log(users);
      showCONTENT = (
         <div class ="form-group">
            <select class="form-control" id="volunteer" onChange={this.onSelect}>
              <option selected>Select Volunteer</option>
              {
                users.map(lol => (
                  lol.user_type === "Volunteer" ?
                  <option value={lol.name}>{lol.name}</option> :
                  console.log("meow")
              ))}
            </select>
          </div>
      );
    }
    return (
      <React.Fragment>
        {/* <nav className="navbar navbar-expand-lg navbar-light bg-light"> */}
          {/* <a className="navbar-brand" href="#">
            <img
              src={require("../images/AtmosLogo.jpeg")}
              width="40"
              height="40"
              className="d-inline-block align-top"
              alt=""
            />
            <span style={{ fontSize: 25 }} className="m-2">
              Atmos
            </span>
          </a> */}
          {/* <div className="dropdown ml-auto" onClick={this.toggleOpen}>
            <button
              className="btn btn-secondary dropdown-toggle"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              Username
            </button>
            <div className={menuClass} aria-labelledby="dropdownMenuButton">
              <a className="dropdown-item" href="#nogo">
                Sign Out
              </a>
            </div>
          </div>
        </nav> */}

        <h1 className="text-center">Add New Program</h1>

        <div class="container">
          <Form
            //className="form-group"
            //action="{{url_for('home')}}"
            method="post"
            // noValidate
            onSubmit={this.onSubmit}
          >
            <Row form>
              <Col md={6}>
                <FormGroup>
                  <Label for="programnameid">Program Name</Label>
                  <Input
                    type="text"
                    name="name"
                    id="programnameid"
                    //placeholder="Enter program name here"
                    //style={{ width: 400 }}
                    value={this.state.name}
                    onChange={this.onChange}
                  />
                </FormGroup>
              </Col>
            </Row>

            <Row form>
              <Col md={6}>
                <FormGroup>
                  <Label for="progdesc">Program Description</Label>
                  <Input
                    type="textarea"
                    name="description"
                    id="progdesc"
                    placeholder="Enter program description here"
                    value={this.state.description}
                    onChange={this.onChange}
                  />
                </FormGroup>
              </Col>
            </Row>

            <Row form>
              <Col md={6}>
              {showCONTENT}
              </Col>
            </Row>

            <Row form>
              <Col md={6}>
                <FormGroup>
                  <Label for="Venue">Venue</Label>
                  <Input
                    type="text"
                    name="venue"
                    id="Venue"
                    value={this.state.venue}
                    onChange={this.onChange}
                  />
                </FormGroup>
              </Col>
              <Col md={3}>
                <FormGroup>
                  <Label for="stTime">Start Time</Label>
                  <Input
                    type="datetime"
                    name="startTime"
                    id="stTime"
                    value={this.state.startTime}
                    onChange={this.onChange}
                  />
                </FormGroup>
              </Col>
              <Col md={3}>
                <FormGroup>
                  <Label for="enTime">End Time</Label>
                  <Input
                    type="datetime"
                    name="endTime"
                    id="enTime"
                    value={this.state.endTime}
                    onChange={this.onChange}
                  />
                </FormGroup>
              </Col>
            </Row>

            <Row form>
              <Col md={4}>
                <FormGroup>
                  <Label for="partcapid">Participation Cap</Label>
                  <Input
                    type="number"
                    name="partcap"
                    id="partcapid"
                    value={this.state.partcap}
                    onChange={this.onChange}
                  />
                </FormGroup>
              </Col>
            </Row>
            <Button type="submit">ADD PROGRAM</Button>
          </Form>
        </div>
      </React.Fragment>
    );
  }
}

NewProgram.propTypes = {
  addProgram: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors,
  profile: state.profile
});

export default connect(
  mapStateToProps,
  { addProgram,getUsers }
)(withRouter(NewProgram));
