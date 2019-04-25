import { GET_USERS, LOADING_USERS } from "../actions/types";

const initialState = {
  users: [],
  loading: true
};

export default function(state = initialState, action) {
  switch (action.type) {
    case LOADING_USERS:
      return {
        ...state,
        loading: true
      };
    case GET_USERS:
      return {
        ...state,
        users: action.payload,
        loading: false
      };
    default:
      return state;
  }
}
