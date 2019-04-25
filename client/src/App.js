import React, { Component } from "react";
import { Container } from "reactstrap";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AppNavbar from "./components/Navbars/AppNavbar";
import ParNavbar from "./components/Navbars/ParNavbar";
import HomePage from "./components/HomePage";
import AuthNavbar from "./components/Navbars/AuthNavbar";
import AdminNavBar from "./components/Navbars/AdminNavBar";
import VolNavBar from "./components/Navbars/VolNavBar";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import Dashboard from "./components/Dashboard";
import DashBoardVol from "./components/DashBoardVol";
import Admin from "./components/Admin";
import ProgramPage from "./components/ProgramPage";
import NewProgram from "./components/NewProgram";
import ManageVolunteers from "./components/ManageVolunteers";
import ProgramPagePar from "./components/ProgramPagePar";

import { Provider } from "react-redux";
import store from "./store";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Route exact path="/" component={AppNavbar} />
            <Route exact path="/" component={HomePage} />
            <Route exact path="/login" component={AuthNavbar} />
            <Route exact path="/login" component={SignIn} />
            <Route exact path="/signup" component={AuthNavbar} />
            <Route exact path="/signup" component={SignUp} />
            <Route exact path="/:userId/dashboard" component={ParNavbar} />
            <Route exact path="/:userId/dashboard" component={Dashboard} />
            <Route exact path="/:userId/dashboardVol" component={VolNavBar} />
            <Route
              exact
              path="/:userId/dashboardVol"
              component={DashBoardVol}
            />
            <Route exact path="/admin" component={AdminNavBar} />
            <Route exact path="/admin" component={Admin} />
            <Route exact path="/newprogram" component={AdminNavBar} />
            <Route exact path="/newprogram" component={NewProgram} />
            <Route
              exact
              path="/:var/:lol/programs/:ram"
              component={AdminNavBar}
            />
            <Route
              exact
              path="/:var/:lol/programs/:ram"
              component={ProgramPage}
            />
            <Route
              exact
              path="/managevolunteers/admin/:ram"
              component={AdminNavBar}
            />
            <Route
              exact
              path="/managevolunteers/admin/:ram"
              component={ManageVolunteers}
            />
            <Route
              exact
              path="/:userId/managevolunteers/:ram"
              component={VolNavBar}
            />
            <Route
              exact
              path="/:userId/managevolunteers/:ram"
              component={ManageVolunteers}
            />
            <Route exact path="/:userId/programs/:ram" component={VolNavBar} />
            <Route exact path="/:lol/programs/:ram" component={ProgramPage} />
            <Route
              exact
              path="/:userId/programspar/:ram"
              component={ParNavbar}
            />
            <Route
              exact
              path="/:userId/programspar/:ram"
              component={ProgramPagePar}
            />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;

//Version 5.3
