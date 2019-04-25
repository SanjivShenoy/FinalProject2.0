import { GET_SUBSCRIBED, SUBSCRIBED_LOADING } from "../actions/types";

const initialState = {
  user: {},
  loading2: true
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_SUBSCRIBED:
      return {
        ...state,
        user: action.payload,
        loading2: false
      };
    case SUBSCRIBED_LOADING:
      return {
        ...state,
        loading2: true
      };
    default:
      return state;
  }
}
