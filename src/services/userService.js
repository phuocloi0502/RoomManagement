import { getUserById } from "../redux/slide/UserSlide";
import api from "./axiosClient";

const ENDPOINT = "/user";
const userService = {
  getAll() {
    return api.get(ENDPOINT + "/list");
  },
  getUserById(id) {
    return api.get(ENDPOINT + "/list/" + id);
  },
  createUser(body) {
    return api.post(ENDPOINT + "/add", body);
  },
  deleteUser(id) {
    return api.delete(ENDPOINT + "/delete/" + id);
  },
  updateUserName(id, body) {
    return api.put(ENDPOINT + "/update/" + id, body);
  },
  updatePassword(id, body) {
    return api.put(ENDPOINT + "/update-password/" + id, body);
  },
};
export default userService;
