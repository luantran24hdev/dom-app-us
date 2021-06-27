// const baseURL = 'http://api-meme-zendvn-01.herokuapp.com/api';
// const url = `${baseURL}/post/getListPagination.php?pagesize=3&currPage=1`


// 1. Dùng fetch


function apiLogin() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({
        success: true,
        userId: 1224244274
      })
    }, 2000);
  });
}

function apiGetUserById(id) {
  return new Promise(resolve => {
    // Goij len server lay thong tin user bang id
    setTimeout(() => {
      resolve({
        userId: id,
        fullname: "Tran Van A",
        email: "test@gmail.com",
      })
    }, 1000)
  })
}

// apiLogin()
//   .then(response => {
//     // Xử lí thành công và nhận được dữ liệu và userId thì mới gọi API getUserById
//     console.log("Login: ", response);
//     if (response.success) {
//       apiGetUserById(response.userId)
//         .then(res => {
//           console.log("Get User By ID: ", res);
//         });
//     } else {
//       console.log("Dang nhap that bai")
//     }
//   });

async function demoAsyncAwait() {
  // Data từ response trong hàm then sẽ trả về cho biến thông qua await
  const loginResponse = await apiLogin();
  console.log("Login: ", loginResponse);

  if (loginResponse.success === false) return { error: loginResponse.success };

  const userResponse = await apiGetUserById(loginResponse.userId);
  console.log("User: ", userResponse);
}

console.log("Truoc khi goi demoAsyncAwait");
demoAsyncAwait();
console.log("Sau khi goi demoAsyncAwait");

