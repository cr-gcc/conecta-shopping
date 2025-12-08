<template>
  <div class="introduction mb-12">
    <div class="flex justify-center mb-6">
      <h2 class="text-4xl font-semibold text-rose-500">{{ title }}</h2>
    </div>
    <div class="text-center">
      <p class="text-base font-semibold leading-none">{{ message }}</p>
    </div>
  </div>
</template>
<script setup>
  defineProps({
    title: String,
    message: String,
  })
</script>