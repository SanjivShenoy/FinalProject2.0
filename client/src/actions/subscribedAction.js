import axios from "axios";
import { GET_SUBSCRIBED, SUBSCRIBED_LOADING } from "./types";

export const getSubscribed = userId => dispatch => {
  dispatch(setSubscribedLoading());
  axios.get(`/api/programs/subscribed/${userId}`).then(res =>
    dispatch({
      type: GET_SUBSCRIBED,
      payload: res.data
    })
  );
};

export const setSubscribedLoading = () => {
  return {
    type: SUBSCRIBED_LOADING
  };
};
