import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getUserById, postUserById } from "../../actions/userActions";
import "bootstrap/dist/css/bootstrap.css";

class AdminNavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
  }

  toggleOpen = () =>
    this.setState({
      isOpen: !this.state.isOpen
    });
  onClick = () => {
    this.props.history.push(`/admin`);
  };
  render() {
    // const { user1 } = this.props.user_reducer;
    // console.log(user1);
    // let url = "/" + this.props.match.params.userId + "/dashboard";
    const menuClass = `dropdown-menu${this.state.isOpen ? " show" : ""}`;
    return (
      <React.Fragment>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="#">
            <img
              src={require("../../images/AtmosLogo.jpeg")}
              width="50"
              height="50"
              className="d-inline-block align-top"
              alt=""
            />
            <span style={{ fontSize: 25 }} className="m-2">
              Atmos
            </span>
          </a>
          <div className="dropdown ml-auto" onClick={this.toggleOpen}>
            <div class="pl-5">
              <button
                className="btn btn-secondary dropdown-toggle"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                Admin
              </button>
            </div>
            <div>
              <div className={menuClass} aria-labelledby="dropdownMenuButton">
                <a className="dropdown-item" href="/">
                  Sign Out
                </a>
                <a className="dropdown-item" onClick={this.onClick}>
                  Dashboard
                </a>
              </div>
            </div>
          </div>
        </nav>
      </React.Fragment>
    );
  }
}

AdminNavBar.propTypes = {
  getUserById: PropTypes.func.isRequired,
  user_reducer: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  user_reducer: state.user_reducer
});

export default connect(
  mapStateToProps,
  { getUserById }
)(AdminNavBar);
// export default ParNavBar;;
