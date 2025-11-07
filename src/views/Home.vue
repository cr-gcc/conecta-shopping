<template>
  <h1 class="text-5xl font-semibold text-cyan-900">Home Page</h1>
</template>
<script setup>
  import { useHeroStore } from '@/stores/useHeroStore';

  const heroStore = useHeroStore();

  heroStore.setWithHero(true);
  heroStore.setBanner("/conecta/img/banners/banner-home.jpg");
  
</script>