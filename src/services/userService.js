import { api } from "./index";

const userService = {
  getUserById(userId) {
    return api.callWithAuth().get(`/member/member.php?userid=${userId}`);
  },
};
export default userService;
