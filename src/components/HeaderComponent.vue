<template>
  <header :class="headerClasses" class="relative">
    <div class="mx-auto px-2 sm:px-3 md:px-4 lg:px-8">
      <div class="flex h-20 items-center justify-between">
        <div class="flex-1 md:flex md:items-center md:gap-12">
          <a class="block text-teal-600" href="#">
            <span class="sr-only">Home</span>
            <img class="h-11" src="/img/logos/logo-conecta.png" alt="Conecta Shopping">
          </a>
        </div>

        <div class="md:flex md:h-full md:items-center md:gap-12">
          <nav aria-label="Global" class="hidden md:block h-full">
            <ul class="flex h-full items-center text-xs md:text-sm lg:text-base">
              <li class="h-full">
                <a class="flex h-full items-center px-2 md:px-6 text-rose-600 transition hover:bg-rose-400 hover:text-white" href="#"> Inicio </a>
              </li>

              <li class="h-full">
                <a class="flex h-full items-center px-2 md:px-6 text-rose-600 transition hover:bg-rose-400 hover:text-white" href="#"> Premios </a>
              </li>

              <li class="h-full">
                <a class="flex h-full items-center px-2 md:px-6 text-rose-600 transition hover:bg-rose-400 hover:text-white" href="#"> Alianzas </a>
              </li>

              <li class="h-full">
                <a class="flex h-full items-center px-2 md:px-6 text-rose-600 transition hover:bg-rose-400 hover:text-white" href="#"> Registrate </a>
              </li>

              <li class="h-full">
                <a class="flex h-full items-center px-2 md:px-6 text-rose-600 transition hover:bg-rose-400 hover:text-white" href="#"> Iniciar Sesión </a>
              </li>

              <li class="h-full">
                <button class="flex h-full items-center px-2 md:px-6 text-rose-600 transition hover:bg-rose-400 hover:text-white cursor-pointer"> Sesión </button>
              </li>
            </ul>
          </nav>
          <!--
          <div class="hidden md:relative md:block">
            <button type="button" class="overflow-hidden rounded-full border border-gray-300 shadow-inner">
              <span class="sr-only">Toggle dashboard menu</span>
              <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&amp;fit=crop&amp;q=80&amp;w=1160" alt="" class="size-10 object-cover">
            </button>
            <div class="absolute end-0 z-10 mt-0.5 w-56 divide-y divide-gray-100 rounded-md border border-gray-100 bg-gray-100 shadow-lg" role="menu">
              <div class="p-2">
                <a href="#" class="block rounded-lg px-4 py-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700" role="menuitem">
                  My profile
                </a>

                <a href="#" class="block rounded-lg px-4 py-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700" role="menuitem">
                  Billing summary
                </a>

                <a href="#" class="block rounded-lg px-4 py-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700" role="menuitem">
                  Team settings
                </a>
              </div>

              <div class="p-2">
                <form method="POST" action="#">
                  <button type="submit" class="flex w-full items-center gap-2 rounded-lg px-4 py-2 text-sm text-red-700 hover:bg-red-50" role="menuitem">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-4">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3"></path>
                    </svg>
                    Logout
                  </button>
                </form>
              </div>
            </div>
          </div>
          -->
          <div class="block md:hidden">
            <button @click="isMobileMenuOpen = !isMobileMenuOpen" class="cursor-pointer rounded-sm bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75">
              <i class="fa-solid fa-bars text-rose-500 text-xl"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
    <!-- Mobile Menu -->
    <div v-if="isMobileMenuOpen" class="md:hidden absolute top-20 left-0 w-full bg-white shadow-lg z-50">
      <nav aria-label="Global">
        <ul class="flex flex-col text-base">
          <li>
            <a class="block px-6 py-4 text-rose-600 transition hover:bg-rose-400 hover:text-white border-b border-gray-100" href="#"> Inicio </a>
          </li>
          <li>
            <a class="block px-6 py-4 text-rose-600 transition hover:bg-rose-400 hover:text-white border-b border-gray-100" href="#"> Premios </a>
          </li>
          <li>
            <a class="block px-6 py-4 text-rose-600 transition hover:bg-rose-400 hover:text-white border-b border-gray-100" href="#"> Alianzas </a>
          </li>
          <li>
            <a class="block px-6 py-4 text-rose-600 transition hover:bg-rose-400 hover:text-white border-b border-gray-100" href="#"> Registrate </a>
          </li>
          <li>
            <a class="block px-6 py-4 text-rose-600 transition hover:bg-rose-400 hover:text-white border-b border-gray-100" href="#"> Iniciar Sesión </a>
          </li>
          <li>
            <button class="block w-full text-left px-6 py-4 text-rose-600 transition hover:bg-rose-400 hover:text-white cursor-pointer"> Sesión </button>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script setup>
import { computed, ref } from 'vue';
import { useLayoutStore } from '@/stores/layout';
import { storeToRefs } from 'pinia';

const layoutStore = useLayoutStore();
const { headerStyle, headerColor } = storeToRefs(layoutStore);

const isMobileMenuOpen = ref(false);

const headerClasses = computed(() => {
  if (headerStyle.value === 'transparent') {
    return 'bg-transparent text-white'; 
  }
  if (headerStyle.value === 'color') {
    return ''; // Handle custom color if needed, or use style binding
  }
  return 'bg-base-100 text-base-content';
});
</script>