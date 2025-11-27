<template>
  <header :class="headerClasses">
  <div class="mx-auto px-4 sm:px-6 lg:px-8">
    <div class="flex h-20 items-center justify-between">
      <div class="flex-1 md:flex md:items-center md:gap-12">
        <a class="block text-teal-600" href="#">
          <span class="sr-only">Home</span>
          <img class="h-11" src="/img/logos/logo-conecta.png" alt="Conecta Shopping">
        </a>
      </div>

      <div class="md:flex md:h-full md:items-center md:gap-12">
        <nav aria-label="Global" class="hidden md:block h-full">
          <ul class="flex h-full items-center text-base">
            <li class="h-full">
              <a class="flex h-full items-center px-6 text-rose-600 transition hover:bg-rose-400 hover:text-white" href="#"> About </a>
            </li>

            <li class="h-full">
              <a class="flex h-full items-center px-6 text-rose-600 transition hover:bg-rose-400 hover:text-white" href="#"> Careers </a>
            </li>

            <li class="h-full">
              <a class="flex h-full items-center px-6 text-rose-600 transition hover:bg-rose-400 hover:text-white" href="#"> History </a>
            </li>

            <li class="h-full">
              <a class="flex h-full items-center px-6 text-rose-600 transition hover:bg-rose-400 hover:text-white" href="#"> Services </a>
            </li>

            <li class="h-full">
              <a class="flex h-full items-center px-6 text-rose-600 transition hover:bg-rose-400 hover:text-white" href="#"> Projects </a>
            </li>

            <li class="h-full">
              <button class="flex h-full items-center px-6 text-rose-600 transition hover:bg-rose-400 hover:text-white cursor-pointer"> Blog </button>
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
          <button class="rounded-sm bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75">
            <svg xmlns="http://www.w3.org/2000/svg" class="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div>
</header>
</template>

<script setup>
import { computed } from 'vue';
import { useLayoutStore } from '@/stores/layout';
import { storeToRefs } from 'pinia';

const layoutStore = useLayoutStore();
const { headerStyle, headerColor } = storeToRefs(layoutStore);

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