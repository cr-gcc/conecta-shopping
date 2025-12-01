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
              <li v-if="isAuthenticated" class="h-full">
                <a class="nav-items-style" href="#"> Inicio </a>
              </li>
              <li v-if="isAuthenticated" class="h-full">
                <a class="nav-items-style" href="#"> Premios </a>
              </li>
              <li v-if="isAuthenticated" class="h-full">
                <a class="nav-items-style" href="#"> Alianzas </a>
              </li>
              <li v-if="isAuthenticated" class="h-full">
                <button @click="handleLogout" class="nav-items-style button">
                  Cerrar Sesión
                </button>
              </li>
              <li v-if="!isAuthenticated" class="h-full">
                <a class="nav-items-style" href="#"> Registrarse </a>
              </li>
              <li v-if="!isAuthenticated" class="h-full">
                <a class="nav-items-style" href="#"> Ingresar </a>
              </li>
            </ul>
          </nav>

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
          <li v-if="isAuthenticated">
            <a class="nav-items-style mobile" href="#"> Inicio </a>
          </li>
          <li v-if="isAuthenticated">
            <a class="nav-items-style mobile" href="#"> Premios </a>
          </li>
          <li v-if="isAuthenticated">
            <a class="nav-items-style mobile" href="#"> Alianzas </a>
          </li>
          
          <!-- Mostrar solo si NO está autenticado -->
          <li v-if="!isAuthenticated">
            <a class="nav-items-style mobile" href="#"> Registrate </a>
          </li>
          <li v-if="!isAuthenticated">
            <a class="nav-items-style mobile" href="#"> Iniciar Sesión </a>
          </li>
          
          <!-- Mostrar solo si está autenticado -->
          <li v-if="isAuthenticated">
            <button @click="handleLogout" class="nav-items-style mobile button">
              Cerrar Sesión
            </button>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script setup>
import { computed, ref } from 'vue';
import { useLayoutStore } from '@/stores/layout';
import { useAuthStore } from '@/stores/auth';
import { storeToRefs } from 'pinia';
import { useRouter } from 'vue-router';

const router = useRouter();
const layoutStore = useLayoutStore();

const { headerStyle, headerColor } = storeToRefs(layoutStore);

const authStore = useAuthStore();
const { isAuthenticated, user } = storeToRefs(authStore);

const isMobileMenuOpen = ref(false);

const headerClasses = computed(() => {
  if (headerStyle.value === 'transparent') {
    return 'bg-transparent text-white'; 
  }
  if (headerStyle.value === 'color') {
    return '';
  }
  return 'bg-base-100 text-base-content';
});

const handleLogout = async () => {
  try {
    await authStore.logout();
    router.push('/login');
  } catch (error) {
    console.error('Error al cerrar sesión:', error);
  }
};
</script>