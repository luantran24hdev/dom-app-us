import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useAuth, useUserid } from "../../helpers";
import { asyncGetUserById } from "../../store/user/actions";
export default function UserProfile() {
  useAuth();
  const userId = useUserid();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.currentUser);
  console.log("user", user);
  useEffect(() => {
    // call api de lay thong tin user dua vao token de render len phan info
    dispatch(asyncGetUserById(userId)).then((res) => {
      if (!res.ok === true) {
        alert("Có lỗi xảy ra vui lòng thử lại", res.error);
      }
    });
  }, [userId, dispatch]);

  return (
    <div>
      <main>
        <div className="ass1-login">
          <div className="ass1-login__content">
            <p>{user.email}</p>
            <div className="ass1-login__form">
              <div className="avatar">
                <img
                  src="https://kenh14cdn.com/zoom/460_289/203336854389633024/2021/7/2/photo1625209833030-1625209835506189548988.gif"
                  alt=""
                />
              </div>
              <form action="#">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Tên ..."
                  required
                />
                <select className="form-control">
                  <option value>Giới tính</option>
                  <option value={1}>Nam</option>
                  <option value={0}>Nữ</option>
                </select>
                <input
                  type="file"
                  name="avatar"
                  placeholder="Ảnh đại diện"
                  className="form-control"
                />
                <textarea
                  className="form-control"
                  cols={30}
                  rows={5}
                  placeholder="Mô tả ngắn ..."
                  defaultValue={""}
                />
                <div className="ass1-login__send justify-content-center">
                  <button type="submit" className="ass1-btn">
                    Cập nhật
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
