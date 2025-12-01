import api from "@/lib/axios";
export default {
  async login(credentials) {
    await this.getCsrfCookie();
    return api.post("/api/login", credentials);
  },

  async getUser() {
    return api.get("/api/me");
  },
  
  async logout() {
    return api.post("/api/logout");
  },

  async getCsrfCookie() {
    return api.get("/sanctum/csrf-cookie");
  },
};
