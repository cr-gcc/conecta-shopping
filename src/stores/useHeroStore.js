import { defineStore } from "pinia";
import { ref } from "vue";

export const useHeroStore = defineStore("heroStore", () => {
  const withHero = ref(false);
  const banner = ref("");

  function setWithHero(flag) {
    withHero.value = flag;
  }

  function setBanner(url) {
    banner.value = url;
  }

  return {
    withHero,
    banner,
    setWithHero,
    setBanner,
  };
});
