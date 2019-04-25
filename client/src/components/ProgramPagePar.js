import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { connect } from "react-redux";
import { addData } from "../actions/dataActions";
import { getData } from "../actions/dataActions";
import { getUserById, postUserById } from "../actions/userActions";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PropTypes from "prop-types";
import ProModal from "./Modal";
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

class ProgramPagePar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      flag: false,
      flag2: false,
      name: "Subscribe",
      sub: [],
      temp: {},
      value: true
    };
    // let name2 = "";
    // let arr = [];
    // let temp = "";
    // const { user1 } = this.props.user_reducer;
    // const { data1, loading } = this.props.data;
    // data1.map(fun => (name2 = fun.name));
    // arr = user1.subscription;
    // console.log(arr);
  }
  func = () => {
    // this.setState({n})
    // this.setState({})
    if (this.state.value && !this.state.flag2) {
      let name2 = "";
      let arr = [];
      let temp = "";
      const { user1 } = this.props.user_reducer;
      const { data1, loading } = this.props.data;
      console.log(loading);
      if (!loading && data1 !== null) {
        console.log(data1);
        data1.map(fun => (console.log(fun), (name2 = fun.name)));
      } else {
        console.log("hello");
      }
      arr = user1.subscription;
      console.log(arr);
      console.log(name2);
      arr.map(
        fun => (
          console.log(fun.name),
          fun.name === name2
            ? this.setState({ name: "Subscribed", value: false })
            : //  console.log(arr.name)
              (temp = name2)
        )
      );
      this.setState({ flag2: true });
    } else {
      console.log("It's working");
    }
  };
  componentDidMount() {
    this.props.getUserById(this.props.match.params.userId);
    // .then(res => this.setState({ sub: res.subscription }));
    this.props.getData(this.props.match.params.ram);
  }
  // pointless = data => {
  //   this.setState({temp:data})
  // }
  onClick = () => {
    this.setState({ flag: true });
    this.setState({ name: "Subscribed" });
    this.setState({ value: false });
    this.setState({ flag2: false });
    // const newSub = {

    // }
    // this.props.postUserById(this.state.temp)
  };
  render() {
    console.log(this.props.match.params.userId);
    const { data1, loading } = this.props.data;
    const { user1, loading2 } = this.props.user_reducer;
    console.log(typeof user1.name);

    if (typeof user1.name !== "undefined" && !loading2 && !loading) {
      // console.log(user1);
      this.func();
      // this.setState({ flag2: true });
    } else {
      // if(this.state.flag3)
      // {
      console.log("else is it working?????");
      // this.setState({ flag2: true });
      // }
    }
    let anmt = [],
      venue,
      startTime,
      rev = [],
      managers,
      manager;
    const ob = {
      name: "",
      startTime: "",
      announcements: [],
      venue: "",
      id: ""
    };
    if (!loading) {
      data1.map(
        fun => (
          (anmt = fun.announcements),
          (venue = fun.venue),
          (startTime = fun.startTime),
          (managers = fun.managers)
        )
      );
    } else {
      console.log("hi");
    }
    if (typeof managers !== "undefined") {
      managers.map(lol => (manager = lol));
    }
    rev = anmt.slice();
    rev.reverse();
    data1.map(
      fun => (
        (ob.name = fun.name),
        (ob.startTime = fun.startTime),
        (ob.announcements = fun.announcements),
        (ob.venue = fun.venue),
        (ob.id = fun._id)
      )
    );

    let flag2 = true;
    if (this.state.flag && user1 !== null) {
      this.setState({ flag: false });
      user1.subscription.push(ob);
      if (this.state.flag && flag2) {
        (flag2 = false),
          console.log("please.........."),
          this.props.postUserById(user1, this.props.match.params.userId);
      }
    }

    let showCONTENT, showCONTENT4;
    let showCONTENT2, showCONTENT3;
    console.log(user1.subscription);
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
                <li class="list-group-item list-group-item-primary">{fun2}</li>
              </div>
            </ul>
          ))}
        </div>
      );
    }

    return (
      <div class="container-xl mt-3 ml-auto mr-auto">
        <span class="text-center">
          <p>{showCONTENT}</p>
        </span>
        <span class="text-center">
          <p>{/*dat.data1.day*/}</p>
        </span>
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
            <button
              disabled={!this.state.value}
              type="button"
              class="btn btn-danger"
              onClick={this.onClick}
            >
              <span style={{ fontSize: 25 }}>{this.state.name}</span>
            </button>
            <h6>{/*{showCONTENT5}*/}</h6>
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

ProgramPagePar.propTypes = {
  getData: PropTypes.func.isRequired,
  addData: PropTypes.func.isRequired,
  getUserById: PropTypes.func.isRequired,
  postUserById: PropTypes.func.isRequired,
  data: PropTypes.object.isRequired,
  user_reducer: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  data: state.data,
  user_reducer: state.user_reducer
});

export default connect(
  mapStateToProps,
  { getData, addData, getUserById, postUserById }
)(ProgramPagePar);
