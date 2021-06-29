import React from "react";
import {useHistory} from 'react-router-dom'
import { LoginHeader, LoginForm } from "../../components/Login";
import { useDispatch } from "react-redux";
import {asyncHandleLogin} from '../../store/auth/actions'

import {useNotAuth} from '../../helpers'

export default function Login() {
  useNotAuth();
 const history = useHistory()
  const dispatch = useDispatch();
  const handleLogin = async (formData) => {
  const {email, password} = formData;
  dispatch(asyncHandleLogin({email, password})).then(res=>{

    console.log('res',res);
    if(res.ok){
      history.push('/')
    }else {
      console.log(res.error);
    }
  })
  
  };
  return (
    <main>
      <div className="ass1-login">
        <LoginHeader />
        <LoginForm handleLogin={handleLogin}/>
      </div>
    </main>
  );
}
