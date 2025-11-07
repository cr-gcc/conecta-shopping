<template>
	<section v-if="withHero" class="bg-white lg:grid lg:h-90 lg:place-content-center">
		<div class="mx-auto max-w-7xl md:grid md:items-center">
			<img :src="banner" alt="hero-img" class="hero-img">
		</div>
	</section>
</template>
<script setup>
  import { useHeroStore } from '@/stores/useHeroStore';
  import { storeToRefs } from 'pinia';

  const heroStore = useHeroStore();
  const { withHero, banner } = storeToRefs(heroStore);
</script>