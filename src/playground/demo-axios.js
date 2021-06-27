import axios from "axios";

const calAPI = axios.create({
  baseURL: 'http://api-meme-zendvn-01.herokuapp.com/api',
  headers: {
    'Authorization': 'Bearer my-token'
  }
});

// axios.get(url)
//   .then(function (response) {
//     // handle success
//     console.log("response", response);
//   })
//   .catch(function (error) {
//     // handle error
//     console.log("error", error);
//   })

calAPI
  .post('/member/password.php', {
    "oldPassword": "123456",
    "newPassword": "123123",
    "reNewPassword": "123123"
  })
  .then(res => {
    console.log("ChangePassword: ", res);
  })
  .catch(e => {
    console.log("ChangePassword error: ", e);
  })

/*
  1. API Public -> Ai cũng gọi được
  2. API Private -> Phải login, Phải áp dụng cơ chế bảo mật vào mới gọi được
*/

// "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6IjIiLCJlbWFpbCI6ImFkbWluQGdtYWlsLmNvbSJ9.XUJH4iGD9GYlY2Xl8iLAv6qQM8LR5mVwKcOx_OJNpVE"