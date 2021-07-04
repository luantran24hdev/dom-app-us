import Login from "../pages/Login";
import Register from "../pages/Register";
import HomePage from "../pages/HomePage";
import UserDetail from "../pages/UserDetail";
import UserProfile from "../pages/UserProfile";

import { PATHS } from "../constants";

export const Routers = [
  {
    path: PATHS.LOGIN,
    exact: true,
    component: Login,
  },
  {
    path: PATHS.REGISTER,
    exact: true,
    component: Register,
  },
  {
    path: PATHS.HOMEPAGE,
    exact: true,
    component: HomePage,
  },
  {
    path: PATHS.USER_PROFILE,
    exact: true,
    component: UserProfile,
  },
  {
    path: PATHS.USER_DETAIL,
    exact: true,
    component: UserDetail,
  },
];
