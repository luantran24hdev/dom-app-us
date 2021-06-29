import { combineReducers } from "redux";

import userReducer from "./user/reducer";
import authReducer from "./auth/reducer";
import appReducer from "./app/reducer";

const memeApp = combineReducers({
  user: userReducer,
  auth: authReducer,
  app: appReducer,
});

export default memeApp;
