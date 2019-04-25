import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { connect } from 'react-redux';
import { addData } from '../actions/dataActions';
import { getData,updateData } from '../actions/dataActions';
import PropTypes from 'prop-types';
import ProgramPage from './ProgramPage';
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Input
} from 'reactstrap';
import { truncate } from 'fs';

class ProModal extends Component {

    constructor(props) {
        super(props);
        
            this.state = {
                modal:false,
                name: "",
                startTime: "",
                description: "",
                announcements: ""
            }
        }
    componentDidMount() {
        this.props.getData(this.props.match.params.ram2);
    }

    onSave = (e) => {
        const {data1,loading} = this.props.data;
        let a, b, c ,f,g;
        let d = [];
        console.log(data1)
        data1.map(lol => ( 
            a = lol.name,
            b = lol.type,
            c = lol.description,
            d = lol.announcements,
            f = lol.startTime,
            g = lol.venue
            ))
        console.log(d)
      e.preventDefault();
        var tempArr = d.slice();
        if(this.state.description !== "")
        {
            c = this.state.description
            console.log('flag1 '+c)
        }
        if(this.state.name !== "")
        {
            a = this.state.name
        }
        if(this.state.startTime !== "")
        {
            f = this.state.startTime
        }
        if(this.state.venue !== "")
        {
            g = this.state.venue
        }
        console.log(d)
        if(this.state.announcements !== "")
        {
            console.log('flag!!!!!!!')
            tempArr.push(this.state.announcements);
            d = tempArr;
        }
        else {
            console.log("Null flag")
        }
        const newData = {
            type: this.props.match.params.ram2,
            name: a,
            description: c,
            announcements: d,
            startTime: f,
            venue: g
        }

        this.props.addData(newData,this.props.match.params.ram2);
        this.toggle();
    }
    toggle = () => {
        this.setState({
            modal: !this.state.modal
        });
    }
    onChange1 = (e) => {
        this.setState({[e.target.name] : e.target.value})
    }
    onChange2 = (e) => {
        this.setState({temp:e.target.value})
    }
    render()
    {
        console.log(this.state)
        return(
            <div>
            <div class = "float-right mr-5 pr-5 md-3 mt-3">
            <button type="button" class="btn btn-secondary" onClick={this.toggle}>
                edit
            </button>
            </div>
            <Modal isOpen={this.state.modal} toggle={this.toggle}>
            <ModalHeader toggle={this.toggle}>Edit</ModalHeader>
            <ModalBody>
                <form>
                    <div class="form-group">
                        <label for="exampleInputEmail1">Name</label>
                        <Input type="text" name="name" onChange={this.onChange1}  placeholder="Enter Name"/>
                        <label for="exampleInputEmail1">Description</label>
                        <Input type="text" name="description" onChange={this.onChange1}  placeholder="Enter Description"/>
                        <label for="exampleInputEmail1">Annoucements</label>
                        <Input type="text" name="announcements" onChange={this.onChange1}  placeholder="Add Annoucement"/>
                        <label for="exampleInputEmail1">Time</label>
                        <Input type="text" name="startTime" onChange={this.onChange1}  placeholder="Enter Time"/>
                        <label for="exampleInputEmail1">Venue</label>
                        <Input type="text" name="venue" onChange={this.onChange1}  placeholder="Enter Venue"/>
                    </div>
                </form>
            </ModalBody>
            <ModalFooter>
                <Button color="dark" onClick={this.onSave}>Save</Button>
            </ModalFooter>
            </Modal>
            </div>
          );
      }
    }

    ProModal.propTypes = {
    addData: PropTypes.func.isRequired,
    getData: PropTypes.func.isRequired,
    data: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    data: state.data
});

export default connect(
  mapStateToProps,
  { addData,getData }
)(ProModal);