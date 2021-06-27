import React from "react";
import { Link } from "react-router-dom";

// validate dữ liệu
export default function LoginForm() {
  return (
    <div className="ass1-login__content">
      <p>Login</p>
      <div className="ass1-login__form">
        <form action="#">
          <input
            type="text"
            className="form-control"
            placeholder="Email"
            required
          />
          <div className="ass1-input-copy">
            <input
              type="password"
              className="form-control"
              placeholder="Mật khẩu"
              required
            />
          </div>
          <div className="ass1-login__send">
            <Link to="/register">Đăng ký một tài khoản</Link>
            <button type="submit" className="ass1-btn">
              Đăng nhập
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
