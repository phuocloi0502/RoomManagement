import api from "./axiosClient";

const ENDPOINT = "/canbo";
const canBoService = {
  checkIn(roomId, body) {
    return api.post(ENDPOINT + "/add-room/" + roomId, body);
  },
  getCanBoById(id) {
    return api.get(ENDPOINT + "/danhsach/" + id);
  },
};
export default canBoService;
