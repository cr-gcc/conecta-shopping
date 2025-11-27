<template>
  <div v-if="heroVisible" class="w-full h-96" :style="backgroundStyle">
    <slot></slot>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { storeToRefs } from "pinia";
import { useLayoutStore } from "@/stores/layout";

const layoutStore = useLayoutStore();
const { heroType, heroValue, heroVisible } = storeToRefs(layoutStore);

const backgroundStyle = computed(() => {
  if (heroType.value === 'image' && heroValue.value) {
    return {
      backgroundImage: `url('${heroValue.value}')`,
      backgroundSize: "100% 100%",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
    };
  }
  if (heroType.value === 'color' && heroValue.value) {
    return {
      backgroundColor: heroValue.value,
    };
  }
  return {};
});
</script>
