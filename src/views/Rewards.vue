<template>
  <div class="py-4 px-36 mt-10">
    <div class="introduction mb-12">
      <div class="flex justify-center mb-6">
        <h2 class="text-4xl font-semibold text-rose-500">Categoría de premios</h2>
      </div>
      <div class="text-center">
        <p class="text-base font-semibold leading-none">Te tenemos nuevas misiones cargadas de puntos. Gana, acumula y cambia tus puntos por bonos para pagar servicios y mucho más.</p>
      </div>
    </div>
    <div class="rewards">
      <!-- Buscar y ordenar -->
      <div class="flex justify-between items-center gap-4 mb-18">
        <!-- Buscar premios -->
        <div class="relative w-auto">
          <i class="fa-solid fa-magnifying-glass absolute text-sm left-3 top-1/2 -translate-y-1/2 text-gray-600"></i>
          <input 
            v-model="searchReward" 
            type="text" 
            placeholder="Buscar premios..."
            class="w-full text-sm pl-10 pr-4 py-1 border border-black rounded outline-none focus:outline-none cursor-text"
          />
        </div>
        <!-- Ordenar por -->
        <div class="relative w-52" ref="containerRef">
          <div
            @click="openSelect = !openSelect"
            class="w-full text-sm px-4 py-1 border border-black rounded outline-none focus:outline-none cursor-pointer flex items-center justify-between"
          >
            <span class="break-words">
              {{ selectedSort ? options.find(o => o.value === selectedSort)?.label : 'Ordenar por' }}
            </span>
            <i class="fa fa-angle-down mt-1"/>
          </div>
          <div
            v-if="openSelect"
            class="absolute z-10 mt-1 w-full bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-auto"
          >
            <!-- Disabled default option -->
            <div
              class="flex items-center px-3 py-1 text-sm text-gray-400 cursor-default"
            >
              <span class="break-words whitespace-normal">Ordenar por</span>
            </div>
            <!-- Actual options -->
            <div
              v-for="option in options"
              :key="option.value"
              @click="selectOption(option.value)"
              class="flex items-center px-3 py-1 text-sm"
              :class="[
                'hover:bg-gray-200 cursor-pointer',
                {'bg-gray-100 font-semibold': selectedSort === option.value}
              ]"
            >
              <span class="break-words whitespace-normal">{{ option.label }}</span>
            </div>
          </div>
        </div>
      </div>
      <!-- Lista de premios -->
      <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <div v-for="(x, index) in 10" :key="index">
          <RC/>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
  import { ref, onMounted, onUnmounted } from 'vue';
  import { usePageLayout } from '@/composables/usePageLayout';
  import RC from '@/components/RewardComponent.vue';

  const searchReward = ref('');
  const openSelect = ref(false);
  const selectedSort = ref('');
  const containerRef = ref(null);
  const options = [
    { value: '1', label: 'De menor a mayor costo' },
    { value: '2', label: 'De mayor a menor costo' },
    { value: '3', label: 'A a la Z' },
    { value: '4', label: 'Z a la A' }
  ];

  const selectOption = (value) => {
    selectedSort.value = value;
    openSelect.value = false;
  };

  const handleClickOutside = (event) => {
    if (containerRef.value && !containerRef.value.contains(event.target)) {
      openSelect.value = false;
    }
  };

  onMounted(() => {
    document.addEventListener('click', handleClickOutside);
  });

  onUnmounted(() => {
    document.removeEventListener('click', handleClickOutside);
  });

  usePageLayout({
    heroVisible: true,
    heroType: 'image',
    heroValue: '/conecta/img/banners/banner-premios.jpg',
    heroTitle: '', 
    headerStyle: 'white',
    footerVisible: true
  });
</script>