<template>
  <div class="py-4 px-36 mt-10">
    <Introduction :title="title" :message="msg"/>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <div v-for="(x, index) in 10" :key="index">
        <ProductComponent />
      </div>
    </div>
  </div>
</template>
<script setup>
  import { usePageLayout } from '@/composables/usePageLayout';
  import Introduction from '@/components/IntroductionComponent.vue';
  import ProductComponent from '@/components/ProductComponent.vue';

  const title = 'Combina y gana más';
  const msg = 'Haz valer tus puntos y combinalos con efectivo o vales o algun otro metodo de pago y recibe los mejores productos.';

  usePageLayout({
    heroVisible: true,
    heroType: 'image',
    heroValue: '/conecta/img/banners/banner-productos.jpg',
    heroTitle: '', 
    headerStyle: 'white',
    footerVisible: true
  });
</script>