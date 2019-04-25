import axios from "axios";
import { GET_USERBYID, POST_USERBYID, USER1_LOADING } from "./types";

export const getUserById = id => dispatch => {
  dispatch(setUser1Loading());
  axios.get(`/api/users/${id}`).then(res =>
    dispatch({
      type: GET_USERBYID,
      payload: res.data
    })
  );
};

export const postUserById = (data, id) => dispatch => {
  console.log("work........");
  console.log(id);
  axios.post(`/api/users/${id}`, data).then(res =>
    dispatch({
      type: POST_USERBYID,
      payload: res.data
    })
  );
};

export const setUser1Loading = () => {
  return {
    type: USER1_LOADING
  };
};
