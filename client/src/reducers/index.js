import { combineReducers } from "redux";
import authReducer from "./authReducer";
import userReducer from "./userReducer";
import errorReducer from "./errorReducer";
import getReducer from "./getReducer";
import getPrograms from "./getPrograms";
import getSubscribed from "./getSubscribed";
import dataReducer from './dataReducer';

export default combineReducers({
  user_reducer: userReducer,
  auth: authReducer,
  errors: errorReducer,
  profile: getReducer,
  programs: getPrograms,
  subscribed: getSubscribed,
  data: dataReducer
});
