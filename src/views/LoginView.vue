<template>
  <h1 class="text-5xl font-semibold text-cyan-900">Login Page</h1>
</template>

<script setup>
import { usePageLayout } from '@/composables/usePageLayout';

usePageLayout({
  heroVisible: false,
  heroType: 'none',
  headerStyle: 'white',
  footerVisible: false
});
</script>