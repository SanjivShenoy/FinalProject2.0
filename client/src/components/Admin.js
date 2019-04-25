import React, { Component } from "react";
import { Collapse, Button, CardBody, Card } from "reactstrap";
import { getUsers } from "../actions/authActions";
import { getPrograms } from "../actions/programAction";
import PropTypes from "prop-types";
import { connect } from "react-redux";

class Admin extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.props.getPrograms();
    this.state = { collapse: false };
  }
  componentDidMount() {
    this.props.getUsers(this.props.match.params.id);
  }
  state = {
    isOpen: false
  };

  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }

  toggleOpen = () => this.setState({ isOpen: !this.state.isOpen });
  render() {
    document.body.style = "background: white;";
    let { users, loading } = this.props.profile;
    const url = "/admin/abc/programs/";
    let { programs1, loading1 } = this.props.programs;
    const menuClass = `dropdown-menu${this.state.isOpen ? " show" : ""}`;
    let showCONTENT, showCONTENT1;
    if (programs1 === null || loading1) {
      showCONTENT1 = <span>loading...</span>;
    } else {
      console.log(programs1);
      showCONTENT1 = (
        <ol>
          {programs1.map(lol => (
            <li>
              <a style={{ color: "purple" }} href={url + lol._id}>
                {lol.name}
              </a>
            </li>
          ))}
        </ol>
      );
    }
    if (users === null || loading) {
      showCONTENT = <h4>loading...</h4>;
    } else {
      console.log(users);
      showCONTENT = (
        <ol>{users.map(fun => (console.log(fun), <li>{fun.name}</li>))}</ol>
      );
    }
    return (
      <React.Fragment>
        <ul>
          <h4 className="m-3">
            <li>
              <a href="/newprogram">Add a new Program</a>
            </li>
            <br />
            <li>
              List of Current Programs
              {showCONTENT1}
            </li>
          </h4>
        </ul>
        <div>
          <Button
            className="m-3"
            color="primary"
            onClick={this.toggle}
            style={{ marginBottom: "1rem" }}
          >
            See User's List
          </Button>
          <Collapse isOpen={this.state.collapse}>
            <Card>
              <CardBody>{showCONTENT}</CardBody>
            </Card>
          </Collapse>
        </div>
      </React.Fragment>
    );
  }
}

Admin.propTypes = {
  getUsers: PropTypes.func.isRequired,
  //auth: PropTypes.object.isRequired,
  getPrograms: PropTypes.func.isRequired,
  programs: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  // auth: state.auth,
  programs: state.programs,
  profile: state.profile
});

export default connect(
  mapStateToProps,
  { getUsers, getPrograms }
)(Admin);

//Try//
