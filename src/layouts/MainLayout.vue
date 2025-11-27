<template>
  <div class="min-h-screen flex flex-col">
    <Header/>
    <HHLayout>
      <Hero/>  
    </HHLayout>
    <main class="flex-1">
      <div class="space-y-4 px-4 py-6">
        <slot />
      </div>
    </main>
    <Footer v-if="footerVisible"/>
  </div>
</template>
<script setup>
  import HHLayout from '@/layouts/HeaderHeroLayout.vue';
  import Header from '@/components/HeaderComponent.vue';
  import Hero from "@/components/HeroComponent.vue";
  import Footer from '@/components/FooterComponent.vue';
  import { useLayoutStore } from '@/stores/layout';
  import { storeToRefs } from 'pinia';

  const layoutStore = useLayoutStore();
  const { footerVisible } = storeToRefs(layoutStore);
</script>