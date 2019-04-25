import React, { Component } from "react";
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

class AuthNavbar extends Component {
  render() {
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
      </nav>
    );
  }
}

export default AuthNavbar;
