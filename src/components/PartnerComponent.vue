<template>
  <div
    class="relative card bg-white w-auto shadow-sm rounded-none overflow-hidden group"
  >
    <div
      class="absolute inset-0 bg-white flex flex-col items-center justify-start gap-2 translate-y-[-100%] group-hover:translate-y-0 transition-transform duration-500 ease-out z-20 p-4 text-center"
    >
      <h1 class="text-lg font-bold text-rose-500">{{ partner.title }}</h1>
      <p class="text-xs text-gray-950 font-semibold mb-3">{{ partner.description }}</p>
      <button 
        type="submit"
        class="btn btn-xs md:btn-sm btn-outline btn-secondary" 
        :disabled="isLoading"
      >
        <span v-if="!isLoading">Obtener alianza</span>
      </button>
    </div>
    <figure class="p-2">
      <img
        :src="partner.images[0]" 
        alt="Partner Logo"
        class="relative z-0"
      />
    </figure>
    <div class="card-body pt-2 pb-4 px-2 relative z-10">
      <div class="flex justify-center">
        <h2 class="card-title font-bold text-rose-500">{{ partner.title }}</h2>
      </div>
    </div>
  </div>
</template>

<script setup>
  import { ref } from 'vue';
  const isLoading = ref(false);

	defineProps({
		partner: {
			type: Object,
			required: true
		}
	})
</script>