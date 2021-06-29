import { api } from "../../services";
import { actShowLoading, actHideLoading } from "../app/actions";
import {actSetUserInfo} from '../user/actions'
import {Storage} from '../../helpers'
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const actLoginSuccess= ({token}) => {
  return {
    type: LOGIN_SUCCESS,
    payload: {
        token
    },
  };
};
export const asyncHandleLogin = ({email, password}) => {
  return async(dispatch) => {
    try {
      dispatch(actShowLoading());
    
      const response = await api.call().post("/member/login.php", {email,password})
      dispatch(actHideLoading());
      console.log('result',response);
    if (response.data.status !== 200) {
      alert(response.data.error) 
      return {
        ok: false,
        error: response.data.error
      }
    } else {
      const user = response.data.user;
      const token = response.data.token;
      Storage.setToken(token);
      dispatch(actLoginSuccess({ token }));
      dispatch(actSetUserInfo({ user }));
      return { ok: true }
    }
  } catch (err) {
    dispatch(actHideLoading());
    return { ok: false, error: err.message }
  
       
     }
  }
}