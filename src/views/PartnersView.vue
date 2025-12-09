<template>
  <div class="py-4 px-36 mt-10">
    <Introduction :title="title" :message="msg"/>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <div v-for="(partner, index) in partners" :key="index">
        <Partner :partner="partner"/>
      </div>
    </div>
  </div>
</template>
<script setup>
	import { ref, onMounted } from 'vue';
  import { usePageLayout } from '@/composables/usePageLayout';
	import { useLoadingScreenStore } from '@/stores/loadingScreen';
  import Introduction from '@/components/IntroductionComponent.vue';
  import Partner from '@/components/PartnerComponent.vue';
	import api from "@/lib/axios";

	const loadingScreen = useLoadingScreenStore();
  const title = 'Nuestros socios';
  const msg = 'Con las Alianzas Conecta encontrarás múltiples opciones para cada momento de tu vida. Podrás: hacer, comprar, ir y saber. ¡Descúbrelas y disfruta!';
	const partners = ref([]);

  usePageLayout({
    heroVisible: true,
    heroType: 'image',
    heroValue: '/conecta/img/banners/banner-alianza.jpg',
    heroTitle: '', 
    headerStyle: 'white',
    footerVisible: true
  });

	const getPartners = async () => {
		loadingScreen.show();
		const url = import.meta.env.VITE_API_PARTNERS;
		try {
			const response =  await api.get(url);
			partners.value = response.data.products;
		} catch (error) {
			console.error('Error al obtener los productos:', error);
		} finally {
			loadingScreen.hide();
		}
	};

	onMounted( async () => {
		await getPartners();
	});

</script>