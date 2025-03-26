// loginApi.js
import repository from "@/Base/repository.js";

const resource = "/api/auth/user";
const resourceActive = "/api/auth/userprofile";

export default {
  getListUser() {
    return repository.get(`${resource}`);
  },
  addUser(payload) {
    return repository.post(`${resource}`, payload);
  },
  updateUser(payload) {
    return repository.put(`${resource}`, payload);
  },
  updateUserActive(payload) {
    return repository.post(`${resourceActive}`, payload);
  },
  deleteUser(payload) {
    return repository.delete(`${resource}`, payload);
  },
};
