<template>
  <div 
    v-if="heroVisible" 
    class="hero w-full h-[186px]"
  >
    <div class="hero-content flex items-center justify-center text-center">
      <div v-if="heroTitle" class="max-w-3xl px-4">
        <h1 class="mb-5 text-4xl md:text-6xl text-white font-TwCCR uppercase">
          {{ heroTitle }}
        </h1>
      </div>
    </div>
  </div>
</template>
<script setup>
  import { storeToRefs } from "pinia";
  import { useLayoutStore } from "@/stores/layout";

  const layoutStore = useLayoutStore();
  const { heroVisible, heroTitle } = storeToRefs(layoutStore);
</script>
