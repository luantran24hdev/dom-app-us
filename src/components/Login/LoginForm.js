import React, { useState } from "react";
import { Link } from "react-router-dom";

// validate dữ liệu
export default function LoginForm({ handleLogin }) {

  const [form, setForm] = useState({ email: "", password: "" });

  const onChangeFormData = (keyField) => (evt) => {
    setForm({
      ...form,
      [keyField]: evt.target.value,
    });
  };
  const handleSubmitLogin = (e) => {
    e.preventDefault();

    if (handleLogin) {
      handleLogin(form);
    }
  };
  return (
    
    <div className="ass1-login__content">
      <p>Login</p>
      <div className="ass1-login__form">
        <form action="#">
          <input
            value={form.email}
            onChange={onChangeFormData("email")}
            type="text"
            className="form-control"
            placeholder="Email"
            required
          />
          <div className="ass1-input-copy">
            <input
              value={form.password}
              onChange={onChangeFormData("password")}
              type="password"
              className="form-control"
              placeholder="Mật khẩu"
              required
            />
          </div>
          <div className="ass1-login__send">
            <Link to="/register">Đăng ký một tài khoản</Link>
            <button
              onClick={handleSubmitLogin}
              type="submit"
              className="ass1-btn"
            >
              Đăng nhập
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
