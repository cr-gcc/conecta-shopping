<template>
  <div class="py-4 px-36 mt-10">
    <Introduction :title="title" :message="msg"/>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <div v-for="(x, index) in 10" :key="index">
        <Partner/>
      </div>
    </div>
  </div>
</template>
<script setup>
  import { usePageLayout } from '@/composables/usePageLayout';
  import Introduction from '@/components/IntroductionComponent.vue';
  import Partner from '@/components/PartnerComponent.vue';

  const title = 'Nuestros socios';
  const msg = 'Con las Alianzas Conecta encontrarás múltiples opciones para cada momento de tu vida. Podrás: hacer, comprar, ir y saber. ¡Descúbrelas y disfruta!';

  usePageLayout({
    heroVisible: true,
    heroType: 'image',
    heroValue: '/conecta/img/banners/banner-alianza.jpg',
    heroTitle: '', 
    headerStyle: 'white',
    footerVisible: true
  });

</script>