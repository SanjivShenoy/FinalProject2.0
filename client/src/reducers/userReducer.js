import { GET_USERBYID, POST_USERBYID, USER1_LOADING } from "../actions/types";
const initialState = {
  user1: {},
  loading2: true
};

export default function(state = initialState, action) {
  console.log(action.type);
  switch (action.type) {
    case GET_USERBYID:
      return {
        ...state,
        user1: action.payload,
        loading2: false
      };
    case POST_USERBYID:
      return {
        ...state
        // user1: action.payload
      };
    case USER1_LOADING: {
      return {
        ...state,
        loading2: true
      };
    }
    default:
      return state;
  }
}
