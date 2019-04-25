import isEmpty from "../validation/is-empty";

import { SET_CURRENT_USER } from "../actions/types";

const initialState = {
  isAuthenticated: false,
  user: {}
  // user_type: ""
};

export default function(state = initialState, action) {
  console.log('jhv meow')
  console.log(action.type)
  switch (action.type) {
    case SET_CURRENT_USER:
      console.log(action.payload.user_type)
      return {
        ...state,
        isAuthenticated: !isEmpty(action.payload),
        user: action.payload
        // user_type : action.payload.user_type,
      };
    default:
      return state;
  }
}
