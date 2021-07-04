import { userService } from "../../services";
import { actShowLoading, actHideLoading } from "../app/actions";
import { useDispatch } from "react-redux";

export const SET_USER_INFOR = "SET_USER_INFOR";
export const SET_USER_BY_ID = "SET_USER_BY_ID";

export const actSetUserInfo = ({ user }) => {
  return {
    type: SET_USER_INFOR,
    payload: { user },
  };
};
export const getUserById = ({ user }) => {
  return {
    type: SET_USER_BY_ID,
    payload: { user },
  };
};

export const asyncGetUserById = (useid) => {
  return async (dispatch) => {
    try {
      dispatch(actShowLoading());

      const response = await userService.getUserById(useid);

      dispatch(actHideLoading());

      if (response.data.status === 200) {
        const user = response.data.user;
        dispatch(actSetUserInfo({ user }));
        return {
          ok: true,
          data: response.data,
        };
      } else {
        return {
          error: response.data.error,
        };
      }
    } catch (err) {
      dispatch(actHideLoading());
      return { ok: false, error: err.message };
    }
  };
};
