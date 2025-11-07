<template>
  <div class="min-h-screen flex flex-col">
    <Header/>
    <Hero/>
    <main class="flex-1">
      <div class="space-y-4 px-4 py-6">
        <slot />
      </div>
    </main>
    <Footer/>
  </div>
</template>
<script setup>
  import Header from '@/components/Header.vue';
  import Hero from "@/components/Hero.vue";
  import Footer from '@/components/Footer.vue';
</script>