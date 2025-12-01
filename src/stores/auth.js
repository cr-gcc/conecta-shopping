import { defineStore } from "pinia";
import AuthService from "@/services/AuthService";
export const useAuthStore = defineStore("auth", {
  state: () => ({
    user: null,
    isAuthenticated: false, // Or derive from user !== null
  }),
  persist: true, // Using pinia-plugin-persistedstate
  actions: {
    async login(credentials) {
      try {
        const response = await AuthService.login(credentials);
        
        // Check if backend returns user data directly
        if (response.data.user) {
          this.user = response.data.user;
          this.isAuthenticated = true;
        } else {
          // Fallback to fetching user if not in response
          await this.fetchUser();
        }
      } catch (error) {
        // Reset auth state on any error
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
        throw error; // Propagate error to caller
      }
    },
    async logout() {
      try {
        await AuthService.logout();
      } finally {
        this.user = null;
        this.isAuthenticated = false;
        // Optional: Clear persistence if needed manually
      }
    },
  },
});
