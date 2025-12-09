<template>
  <div class="py-4 px-36 mt-10">
    <Introduction :title="title" :message="msg"/>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <div v-for="(product, index) in products" :key="index">
        <ProductComponent :product="product"/>
      </div>
    </div>
  </div>
</template>
<script setup>
	import { ref, onMounted } from 'vue';
  import { usePageLayout } from '@/composables/usePageLayout';
  import Introduction from '@/components/IntroductionComponent.vue';
  import ProductComponent from '@/components/ProductComponent.vue';
	import api from "@/lib/axios";

  const title = 'Combina y gana más';
  const msg = 'Haz valer tus puntos y combinalos con efectivo o vales o algun otro metodo de pago y recibe los mejores productos.';
	const products = ref([]);

  usePageLayout({
    heroVisible: true,
    heroType: 'image',
    heroValue: '/conecta/img/banners/banner-productos.jpg',
    heroTitle: '', 
    headerStyle: 'white',
    footerVisible: true
  });

	const getProducts = async () => {
		const url = import.meta.env.VITE_API_PRODUCTS;
		try {
			const response =  await api.get(url);
			products.value = response.data;
			console.log(response.data);
		} catch (error) {
			console.error('Error al obtener los productos:', error);
		}
	};

	onMounted( async () => {
		await getProducts();
	});
</script>