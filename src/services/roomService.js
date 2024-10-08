import api from "./axiosClient";

const ENDPOINT = "/phong";
const roomService = {
  getAll() {
    return api.get(ENDPOINT + "/danhsach");
  },
  getRoomByFLoorId(id) {
    return api.get(ENDPOINT + "/tang/" + id);
  },
  getRoomById(id) {
    return api.get(ENDPOINT + "/danhsach/" + id);
  },

  //   create(body) {
  //     return api.post(ENDPOINT, body);
  //   },
  //   update(id, body) {
  //     return api.put(ENDPOINT + id, body);
  //   },
  //   delete(id) {
  //     return api.delete(ENDPOINT + id);
  //   },
};
export default roomService;
