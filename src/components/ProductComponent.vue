<template>
  <div class="group w-full max-w-sm bg-transparent">
    <div class="relative transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
      <div class="rounded-lg shadow-md bg-white p-3 [backface-visibility:hidden]">
        <figure class="flex justify-center">
          <img
            :src="product.image"
            class="object-cover w-auto h-40 rounded-md"
          />
        </figure>
        <h2 class="mt-3 text-center text-lg font-bold text-rose-500">
          {{ product.title }}
        </h2>
      </div>
      <div class="rounded-lg shadow-md bg-rose-500 text-white p-4 [backface-visibility:hidden] [transform:rotateY(180deg)] absolute inset-0">
        <div class="flex flex-col items-center justify-center">
          <h1 class="text-xl font-bold mb-2">Información</h1>
          <p class="text-sm text-white/90 mb-6">
            {{ product.description }}
          </p>
          <button class="btn btn-sm btn-outline border-white text-white hover:bg-white hover:text-rose-500">
            Adquirir
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
	defineProps({
		product: {
			type: Object,
			required: true
		}
	});
</script>
