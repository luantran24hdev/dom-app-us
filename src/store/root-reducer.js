import { combineReducers } from "redux";

import userReducer from "./user/reducer";
import authReducer from "./user/reducer";

const memeApp = combineReducers({
  user: userReducer,
  auth: authReducer,
});

export default memeApp;
