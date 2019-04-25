import React, { Component } from "react";
import { Link } from "react-router-dom";

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container
} from "reactstrap";

class AppNavbar extends Component {
  state = {
    isOpen: false
  };

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };

  render() {
    const menuClass = `dropdown-menu${this.state.isOpen ? " show" : ""}`;
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">
          <img
            src={require("../../images/AtmosLogo.jpeg")}
            width="50"
            height="50"
            className="d-inline-block align-top"
            alt=""
          />
          <span style={{ fontSize: 30 }} className="m-2">
            Atmos
          </span>
        </a>
        <div className="ml-auto">
          <Link className="btn btn-primary" to="/login">
            SignIn
          </Link>
          <Link className="btn btn-primary m-2" to="/signup">
            SignUp
          </Link>
        </div>
      </nav>
    );
  }
}

export default AppNavbar;
