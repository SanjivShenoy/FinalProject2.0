import axios from "axios";
import { GET_PROGRAMS, PROGRAMS_LOADING } from "./types";

export const getPrograms = () => dispatch => {
  dispatch(setProgramsLoading());
  axios.get("/api/programs").then(res =>
    dispatch({
      type: GET_PROGRAMS,
      payload: res.data
    })
  );
};

export const setProgramsLoading = () => {
  return {
    type: PROGRAMS_LOADING
  };
};
