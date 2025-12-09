import { defineStore } from "pinia";

export const useLoadingScreenStore = defineStore("app", {
  state: () => ({
    loading: false,
  }),

  actions: {
    setLoading(value) {
      this.loading = value;
    },
    show() {
      this.loading = true;
    },
    hide() {
      this.loading = false;
    }
  }
});
