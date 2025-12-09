<template>
  <div class="card w-auto h-80 mb-10 py-4">
    <figure class="flex justify-center">
      <img
        :src="reward.image"
				class="object-cover w-auto h-40 rounded-md"
        alt="Card"
      />
    </figure>
    <div class="card-body py-14 px-0">
      <p class="text-sm">{{ reward.title }}</p>
      <div class="flex flex-col">
        <span class="text-sm font-bold">{{ reward.price }}</span> 
        <span class="text-xs">Puntos</span>
      </div>
    </div>
    <div class="card-actions">
      <button class="btn btn-neutral btn-xs">Ver más</button>
    </div>
  </div>
</template>
<script setup>
	defineProps({
		reward: {
			type: Object,
			required: true
		}
	});
</script>