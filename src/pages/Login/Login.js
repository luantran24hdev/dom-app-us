import React from "react";
import { LoginHeader, LoginForm } from "../../components/Login";
import { useDispatch } from "react-redux";
import {asyncHandleLogin} from '../../store/auth/actions'

export default function Login() {
 
  const dispatch = useDispatch();
  const handleLogin = async (formData) => {
  const {email, password} = formData;
  dispatch(asyncHandleLogin({email, password}))
      
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
