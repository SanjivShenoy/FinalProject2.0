import React, { Component } from "react";
import { Container, ListGroup, ListGroupItem, Button } from "reactstrap";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { connect } from "react-redux";
import PropTypes from "prop-types";

class HomePage extends Component {
  state = {};
  render() {
    document.body.style = "background: black;";
    return (
      <div>
        <img
          src={require("../images/Bits-Pilani.jpg")}
          // height="5%"
          width="100%"
          alt=""
        />
        <h6 className="m-5 text-center" style={{ color: "white" }}>
          Atoms is the technical Fest of Bits-Pilani Hyderabad Campus. It is the
          annual techno-management festival. It is known for a wide range of
          events, such as workshops, quizzes, lectures, technical exhibitions
          and competitions. Among the notable events conducted annually during
          it are the national level quiz Enigma and BITS MUN Hyderabad. Started
          in 2012, ATMOS aims at improving the technical culture among Indian
          colleges as well as providing a platform to showcase their abilities.
          In its sixth year now, ATMOS is growing rapidly with participation
          from students, academicians, entrepreneurs and speakers from all over
          India.
        </h6>
        <div style={{ textAlign: "center" }}>
          <img
            className="m-2"
            src={require("../images/Quadcopter.jpg")}
            height="130"
            width="190"
            alt=""
          />
          <img
            className="m-2"
            src={require("../images/Robowar.jpg")}
            height="130"
            width="190"
            alt=""
          />
          <img
            className="m-2"
            src={require("../images/Tech.jpeg")}
            height="130"
            width="185"
            alt=""
          />
          <img
            className="m-2"
            src={require("../images/MPI.jpg")}
            height="130"
            width="190"
            alt=""
          />
          <img
            className="m-2"
            src={require("../images/GoKart.jpg")}
            height="130"
            width="190"
            alt=""
          />
          <img
            className="m-2"
            src={require("../images/AI.jpeg")}
            height="130"
            width="185"
            alt=""
          />
          {/* <img
            className="m-2"
            src={require("../images/BigData.jpeg")}
            height="130"
            width="190"
            alt=""
          /> */}
        </div>
      </div>
    );
  }
}

export default HomePage;
