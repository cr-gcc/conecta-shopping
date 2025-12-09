import api from "@/lib/axios";
export default {
	loginUrl: import.meta.env.VITE_API_LOGIN,
	logoutUrl: import.meta.env.VITE_API_LOGOUT,
	meUrl: import.meta.env.VITE_API_ME,
	sanctumUrl: import.meta.env.VITE_API_SANCTUM,

  async login(credentials) {
    await this.getCsrfCookie();
    return api.post(this.loginUrl, credentials);
  },

  async getUser() {
    return api.get(this.meUrl);
  },
  
  async logout() {
    return api.post(this.logoutUrl);
  },

  async getCsrfCookie() {
    return api.get(this.sanctumUrl);
  },
};
