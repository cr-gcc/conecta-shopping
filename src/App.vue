<template>
	<layout>
		<router-view />
	</layout>
	<LoadingScreen />
</template>
<script setup>
	import layout from '@/layouts/MainLayout.vue';
	import LoadingScreen from '@/components/LoadingScreenComponent.vue';
</script>