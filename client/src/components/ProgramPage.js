import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { connect } from "react-redux";
import { addData } from "../actions/dataActions";
import { getData } from "../actions/dataActions";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PropTypes from "prop-types";
import ProModal from "./Modal";
import { getUserById } from "../actions/userActions";
import { Link } from "react-router-dom";
// import itemModal from './itemModal.js';
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Input
} from "reactstrap";
import { truncate } from "fs";

class ProgramPage extends Component {
  constructor(props) {
    super(props);
    // state = {

    // }
  }
  componentDidMount() {
    this.props.getData(this.props.match.params.ram);
    // this.props.getUserById(this.props.match.params.userId);
  }

  render() {
    const { data1, loading } = this.props.data;
    // console.log(this.props.match.params.var);
    let url,
      url2 = "",
      url3 = "";
    const { user1, loading2 } = this.props.user_reducer;
    this.props.match.params.var === "admin"
      ? (url2 = "admin/")
      : (url3 = "/" + user1._id);

    let anmt = [],
      venue,
      startTime,
      rev = [],
      managers,
      manager;
    data1.map(
      fun => (
        (anmt = fun.announcements),
        (venue = fun.venue),
        (startTime = fun.startTime),
        (url = fun._id),
        (managers = fun.managers)
      )
    );
    console.log(url2 + url);
    if (typeof managers !== "undefined") {
      managers.map(lol => (manager = lol));
    }
    rev = anmt.slice();
    rev.reverse();
    // console.log(anmt);
    // console.log(data1)
    var lol;
    let Pro_id;
    let showCONTENT, showCONTENT4;
    let showCONTENT2, showCONTENT3;
    console.log(data1);

    if (data1 === null || loading) {
      showCONTENT4 = <span>loading...</span>;
    } else {
      showCONTENT4 = <span>{startTime}</span>;
    }
    if (data1 === null || loading) {
      showCONTENT = <h1>loading...</h1>;
    } else {
      showCONTENT = (
        <div>
          {data1.map(lol => (
            <h1>{lol.name}</h1>
          ))}
        </div>
      );
    }
    if (data1 === null || loading) {
      showCONTENT2 = <span>loading...</span>;
    } else {
      showCONTENT2 = (
        <div>
          {data1.map(
            lol => (
              console.log(lol.description), <span>{lol.description}</span>
            )
          )}
        </div>
      );
    }

    if (data1 === null || loading) {
      showCONTENT3 = <span>loading...</span>;
    } else {
      showCONTENT3 = (
        <div>
          {rev.map(fun2 => (
            <ul class="list-group">
              <div>
                <li class="list-group-item">{fun2}</li>
              </div>
            </ul>
          ))}
        </div>
      );
    }

    return (
      <div class="containner-xl mt-3">
        <div class="row">
          <span class="col-3" />
          <span class="col-6 text-center pt-3">
            <p>{showCONTENT}</p>
          </span>
          <span class="col-3 pr-5 pt-3">
            <Route exact path="/:userId/programs/:ram2" component={ProModal} />
            <Route
              exact
              path="/admin/:lol/programs/:ram2"
              component={ProModal}
            />
          </span>
        </div>
        <div class="text-center">
          <p>{/*dat.data1.day*/}</p>
        </div>
        <div class="container">
          <p>
            <div style={{ fontFamily: "Helvetica", fontSize: 20 }}>
              {showCONTENT2}
            </div>
          </p>
        </div>

        <div class="row mt-4">
          <span class="container col-xl-2">
            <span class="Text-center" style={{ fontSize: 20 }}>
              {"Time: " + startTime}
            </span>
          </span>
          <span class="container col-xl-2">
            <span class="Text-Center" style={{ fontSize: 20 }}>
              {"Venue: " + venue}
            </span>
          </span>
        </div>
        <div class="container">
          <div class="text-center mt-4">
            <Link
              class="btn btn-info"
              to={url3 + "/managevolunteers/" + url2 + url}
            >
              <span style={{ fontSize: 25 }}>Manage Volunteers </span>
            </Link>
          </div>
        </div>
        <div class="pt-5">
          <div class="container">
            <h3 class="text-center">Announcments</h3>
            <div class="mt-2">{showCONTENT3}</div>
          </div>
        </div>
        <div>
          <div class="row mt-5">
            <span class="col col-xl-2 ml-5">
              <span
                class="badge badge-light"
                style={{ fontSize: 20, fontWeight: "normal" }}
              >
                <div class="pb-1">Activity manager:</div>
                {manager}
              </span>
            </span>
            <span class="col col-xl-2 ml-auto">
              <span
                class="badge badge-light"
                style={{ fontSize: 20, fontWeight: "normal" }}
              >
                <div class="pb-1">Contact Number:</div>
                9849731502
              </span>
            </span>
          </div>
        </div>
      </div>
    );
  }
}

ProgramPage.propTypes = {
  getData: PropTypes.func.isRequired,
  addData: PropTypes.func.isRequired,
  getUserById: PropTypes.func.isRequired,
  user_reducer: PropTypes.func.isRequired,
  data: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  user_reducer: state.user_reducer,
  data: state.data
});

export default connect(
  mapStateToProps,
  { getData, addData } //getUserById
)(ProgramPage);
//
