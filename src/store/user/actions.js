
export const SET_USER_INFOR = "SET_USER_INFOR";
export const actSetUserInfo = ({user}) => {
  return {
    type: SET_USER_INFOR,
    payload: {user},
  };
};
