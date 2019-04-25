import axios from "axios";

import {
  GET_ERRORS,
  SET_CURRENT_USER,
  GET_USERS,
  LOADING_USERS
} from "./types";

// Register User
export const registerUser = (userData, history) => dispatch => {
  axios
    .post("/api/users/signup", userData)
    .then(res => history.push("/login"))
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

// Add Program
export const addProgram = (progData, history) => dispatch => {
  console.log("inside addProgram in authAction.js");
  axios
    .post("/api/users/newprog", progData)
    .then(res => history.push("/admin"))
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err
      })
    );
};

export const loginUser = (userData, history) => dispatch => {
  axios
    .post("/api/users/login", userData)
    .then(res => dispatch({ type: SET_CURRENT_USER, payload: res.data }))
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

export const getUsers = () => dispatch => {
  dispatch(setLoading());
  axios
    .get("/api/programs/admin")
    .then(res => dispatch({ type: GET_USERS, payload: res.data }))
    .catch(err => dispatch({ type: GET_ERRORS, payload: err }));
};

export const setLoading = () => {
  return {
    type: LOADING_USERS
  };
};
