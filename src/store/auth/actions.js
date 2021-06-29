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
    
      const result = await api.call().post("/member/login.php", {email,password})
      dispatch(actHideLoading());
      console.log('result',result);
      if(result.data.status !== 200){
        // looix server va hien thi loi
        alert(result.data.error) 
      }else {
        // lay data, luu token
        const token = result.data.token
        Storage.setToken(token)
        const user = result.data.user
        dispatch(actLoginSuccess({token}));
        dispatch(actSetUserInfo({user}));
        return {
          ok:true,
          
        }
  
      }
     } catch (err) {
      dispatch(actHideLoading());
      return {
        ok:false,
        error:err
      }
       
     }
  }
}