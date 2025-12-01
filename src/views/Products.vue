<template>
  <h1 class="text-5xl font-semibold text-cyan-900 py-4 px-6">Products</h1>
</template>
<script setup>
  import { usePageLayout } from '@/composables/usePageLayout';

  usePageLayout({
    heroVisible: true,
    heroType: 'image',
    heroValue: '/conecta/img/banners/banner-productos.jpg',
    heroTitle: '', 
    headerStyle: 'white',
    footerVisible: true
  });
</script>