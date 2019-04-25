import React, { Component } from "react";
import { connect } from "react-redux";
import { getData } from "../actions/dataActions";
import { getPrograms } from "../actions/programAction";
import { getSubscribed } from "../actions/subscribedAction";
import { getUserById } from "../actions/userActions";
import PropTypes from "prop-types";

// const user1 = "ss@gmail.com";
// const { user1 } = this.props.user_reducer;
class Dashboard extends Component {
  componentDidMount() {
    // this.props.getUserById(this.props.match.params.userId);
    this.props.getPrograms();
    // this.props.getData();
    this.props.getSubscribed(this.props.match.params.userId);
  }

  state = {
    isOpen: false
  };
  onChange = e => {
    this;
  };
  toggleOpen = () => this.setState({ isOpen: !this.state.isOpen });
  render() {
    const menuClass = `dropdown-menu${this.state.isOpen ? " show" : ""}`;
    document.body.style = "background: white;";

    const { user1 } = this.props.user_reducer;
    const { programs1, loading1 } = this.props.programs;
    const { user, loading2 } = this.props.subscribed;
    //const { user } = this.props.auth;
    // console.log(abc);
    let showCONTENT;
    let showCONTENT2;
    if (programs1 === null || loading1) {
      showCONTENT = <h4>loading...</h4>;
    } else {
      console.log(programs1);
      const url2 = this.props.match.params.userId;
      const url = `/${url2}/programspar/`;
      console.log(url2);
      console.log(url);
      showCONTENT = (
        <ol style={{ fontSize: 25 }}>
          {programs1.map(fun => (
            <li class="ml-5">
              <a href={url + fun._id}>
                {fun.name}{" "}
                <span style={{ fontSize: 15 }}>
                  {fun.startTime}, {fun.venue}
                </span>
              </a>
            </li>
          ))}
        </ol>
      );
    }

    if (user === null || loading2) {
      showCONTENT2 = <h4>loading...</h4>;
    } else {
      const url = "/programspar/";
      const sbs = user.subscription;
      const id2 = user._id;
      const meow = user.programs_managed;
      console.log(user);
      console.log(user.subscription);
      showCONTENT2 = (
        <tbody>
          {sbs.map(fun => (
            <tr>
              <td>{fun.name}</td>
              <td>
                {fun.startTime}, {fun.venue}
              </td>
              <td>
                <a href={"/" + id2 + url + fun.id}> Notification</a>
              </td>
            </tr>
          ))}
        </tbody>
      );
    }

    return (
      <React.Fragment>
        <div>
          <br />
          <h4 className="m-3" style={{ color: "" }}>
            My Subscriptions:
            <table style={{ fontSize: 20 }} className="table table-hover">
              <thead>
                <tr>
                  <th scope="col">Program</th>
                  <th scope="col">Date, Time, Venue</th>
                  <th scope="col">Notification</th>
                </tr>
              </thead>
              {showCONTENT2}
            </table>
          </h4>
          <br />
        </div>
        <h4 className="m-3">All Programs:</h4>
        {showCONTENT}
      </React.Fragment>
    );
  }
}

Dashboard.propTypes = {
  getPrograms: PropTypes.func.isRequired,
  getData: PropTypes.func.isRequired,
  getUserById: PropTypes.func.isRequired,
  data: PropTypes.func.isRequired,
  programs: PropTypes.object.isRequired,
  getSubscribed: PropTypes.func.isRequired,
  subscribed: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  user_reducer: state.user_reducer,
  data: state.data,
  programs: state.programs,
  subscribed: state.subscribed
});

export default connect(
  mapStateToProps,
  { getSubscribed, getData, getPrograms, getUserById }
)(Dashboard);
