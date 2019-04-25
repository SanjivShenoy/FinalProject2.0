import React, { Component } from "react";
import { ListGroup, ListGroupItem } from "reactstrap";
import { Container, Row, Col, InputGroup, InputGroupAddon } from "reactstrap";
import { getUserById,postUserById } from "../actions/userActions";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";
import { getUsers } from "../actions/authActions";
import { getData,addData } from '../actions/dataActions';
import PropTypes from "prop-types";
import { connect } from "react-redux";

class ManageVolunteers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newtask: "",
      newvolunteer: "",
      tasks: [
      ],
      id: ""
    };
  }

    componentDidMount() {
      this.props.getUsers();
      this.props.getData(this.props.match.params.ram);
    }
    onClick2 = (e) => {
      console.log(e.target.name)
      let temp,temp2,newTasks = [],newTasks2=[];
      const { users,loading5 } = this.props.profile;
      const  { data1,loading }  = this.props.data;
      users.map(fun => (
        e.target.name === fun.name ? 
        temp2 = fun
        : console.log(e.target.name)
        ))
      console.log(temp2)
      temp2.programs_managed.map(fun => (
        fun.task === e.target.value ?
        console.log(fun.task) :
        newTasks2.push(fun)
      ))
      temp2.programs_managed = newTasks2
      data1.map(fun => (temp = fun))
      temp.tasks.map(fun => (
        e.target.value === fun.task ?
        console.log(fun.task) :
        newTasks.push(fun)
      ))
      console.log(newTasks)
      temp.tasks = newTasks
      console.log(temp)
      this.props.addData(temp,this.props.match.params.ram)
      this.props.postUserById(temp2,temp2._id)
    }
    onClick = () => {
      let newData = {
        name:this.state.newvolunteer,
        task:this.state.newtask,
        isCompleted:false
      }
      let temp = "",temp2,temp3;
      const { users,loading5 } = this.props.profile;
      const  { data1,loading }  = this.props.data;
      users.map(fun => (
        this.state.newvolunteer === fun.name ? 
        temp2 = fun
        : console.log(this.state.newvolunteer)
        ))
      data1.map(fun => (temp = fun))
        temp3 = {
          name: temp.name,
          task: newData.task,
          isCompleted:false
        }
      console.log(this.state.newvolunteer)
      console.log(newData)
      console.log(temp3)
      temp.tasks.push(newData);
      console.log(temp);
      console.log(temp)
      this.props.addData(temp,this.props.match.params.ram);
      // temp3.name = temp.name;
      temp2.programs_managed.push(temp3)
      this.props.postUserById(temp2,temp2._id)
    }
  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  onSelect = e => {
    this.setState({newvolunteer: e.target.value})
  }
  toggleOpen = () => this.setState({ isOpen: !this.state.isOpen });

  render() {
    let tasksArr,copy;
    let showCONTENT,showCONTENT2;
    const { users, loading5 } =  this.props.profile;
    const  { data1,loading }  = this.props.data;
    const menuClass = `dropdown-menu${this.state.isOpen ? " show" : ""}`;
    document.body.style = "background: white;";
    if (data1 === null || loading) {
      console.log('loading for data1')
    } else{
      data1.map(lol => (
        tasksArr = lol.tasks.slice()
        ))
    }
    if (users === null || loading5) {
      showCONTENT2 = <span>loading...</span>
    } else {
      showCONTENT2 = (
            <div class ="form-group">
              <select class="form-control" id="volunteer" onChange={this.onSelect}>
                <option selected>Select Volunteer</option>
                {
                  users.map(lol => (
                  console.log(lol),
                    lol.user_type === "Volunteer" ?
                    <option value={lol.name}>{lol.name}</option> :
                    console.log("lol")
                ))}
              </select>
            </div>
      )
    }
    if (tasksArr === null || loading) {
      showCONTENT = <h4>loading...</h4>;
    } else {
      showCONTENT = (
          <ListGroup>
            {tasksArr.map(fun => (
              !fun.isCompleted ?
              <ListGroupItem>
                <Container>
                  <Row>
                    <Col xs="6">{fun.task}</Col>
                    <Col xs="4">{fun.name}</Col>
                    <Col xs="2">
                      <button name={fun.name} type='button' class='btn btn-primary' onClick={this.onClick2} value={fun.task}>
                        Complete
                      </button>
                    </Col>
                  </Row>
                </Container>
              </ListGroupItem>
              : console.log(fun.task+'isCompleted')
            ))}
          </ListGroup>
      );
    }
    return (
      <React.Fragment>

        <h1 className="text-center">Task List</h1>
        <br />

        <div className="container">
          {showCONTENT}
          <br />
          <br />
          <h2 className="text-center">Add Tasks</h2>
          <br />
          <Container>
          <Row>
          <InputGroup>
          <Col sm="4">
            {showCONTENT2}
          </Col>
          <Col sm="6">
            <Input
              type="text"
              name="newtask"
              placeholder="Enter task to be done"
              value={this.state.newtask}
              onChange={this.onChange}
            />
            </Col>
            <Col sm="2">
            <InputGroupAddon addonType="prepend">
              <Button
                onClick={this.onClick}
              >
                Add Task
              </Button>
            </InputGroupAddon>
            </Col>
          </InputGroup>
          </Row>
          </Container>
        </div>
      </React.Fragment>
    );
  }
}

ManageVolunteers.propTypes = {
  postUserById: PropTypes.func.isRequired,
  getUserById: PropTypes.func.isRequired,
  addData: PropTypes.func.isRequired,
  getData: PropTypes.func.isRequired,
  getUser: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
  data: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  user_reducer: state.user_reducer,
  profile: state.profile,
  data: state.data

});

export default connect(
  mapStateToProps,
  {   getData, getUsers,addData,getUserById,postUserById }
)(ManageVolunteers);


