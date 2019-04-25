import { GET_PROGRAMS, PROGRAMS_LOADING } from "../actions/types";

const initialState = {
  programs1: [],
  loading1: true
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_PROGRAMS:
      return {
        ...state,
        programs1: action.payload,
        loading1: false
      };
    case PROGRAMS_LOADING:
      return {
        ...state,
        loading1: true
      };
    default:
      return state;
  }
}
