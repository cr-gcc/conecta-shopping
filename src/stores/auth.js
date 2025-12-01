import { defineStore } from "pinia";
import AuthService from "@/services/AuthService";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    user: null,
    isAuthenticated: false,
  }),
  persist: true,
  actions: {
    async login(credentials) {
      try {
        const response = await AuthService.login(credentials);
        if (response.data.user) {
          this.user = response.data.user;
          this.isAuthenticated = true;
        } else {
          await this.fetchUser();
        }
      } catch (error) {
        this.user = null;
        this.isAuthenticated = false;
        throw error;
      }
    },
    async fetchUser() {
      try {
        const response = await AuthService.getUser();
        this.user = response.data;
        this.isAuthenticated = true;
      } catch (error) {
        this.user = null;
        this.isAuthenticated = false;
        throw error;
      }
    },
    async logout() {
      try {
        await AuthService.logout();
      } finally {
        this.user = null;
        this.isAuthenticated = false;
      }
    },
  },
});
