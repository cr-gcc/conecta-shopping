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
                <router-link to="/" class="nav-items-style"> Inicio </router-link>
              </li>
              <li v-if="isAuthenticated" class="h-full">
                <router-link to="/premios" class="nav-items-style"> Premios </router-link>
              </li>
              <li v-if="isAuthenticated" class="h-full">
                <router-link to="/alianzas" class="nav-items-style"> Alianzas </router-link>
              </li>
              <li v-if="isAuthenticated" class="h-full">
                <router-link to="/productos" class="nav-items-style"> Productos </router-link>
              </li>
              <li v-if="isAuthenticated" ref="userMenuContainer" class="relative h-full flex items-center">
                <button 
                  @click="isUserMenuOpen = !isUserMenuOpen" 
                  class="nav-items-style flex items-center gap-2"
                >
                  {{ user?.name }}
                  <i class="fa-solid fa-chevron-down text-xs transition-transform duration-200" :class="{ 'rotate-180': isUserMenuOpen }"></i>
                </button>
                <!-- User Dropdown -->
                <div 
                  v-if="isUserMenuOpen" 
                  class="absolute top-full right-0 mt-2 w-48 bg-white shadow-lg py-1 z-50"
                >
                  <a href="#" class="group block px-4 py-2 text-sm text-rose-400 hover:bg-rose-400 hover:text-white hover:font-semibold flex items-center gap-2">
                    <i class="mt-0.5 fa fa-user-circle text-rose-400 group-hover:text-white transition-colors"></i>
                    Perfil
                  </a>

                  <a href="#" class="group block px-4 py-2 text-sm text-rose-400 hover:bg-rose-400 hover:text-white hover:font-semibold flex items-center gap-2">
                    <i class="mt-1 fa fa-history text-rose-400 group-hover:text-white transition-colors"></i>
                    Historial
                  </a>
                  
                  <a href="#" class="group block px-4 py-2 text-sm text-rose-400 hover:bg-rose-400 hover:text-white hover:font-semibold flex items-center gap-2">
                    <i class="mt-1 fa fa-shopping-cart text-rose-400 group-hover:text-white transition-colors"></i>
                    Mi carrito
                  </a>
                  
                  <button 
                    @click="handleLogout" 
                    class="group block w-full text-left px-4 py-2 text-sm text-rose-400 hover:bg-rose-400 hover:text-white hover:font-semibold flex items-center gap-2"
                  >
                    <i class="mt-1 fa fa-sign-out text-rose-400 group-hover:text-white transition-colors"></i>
                    Cerrar sesión
                  </button>
                </div>
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
            <button 
              @click="isMobileUserOptionsOpen = !isMobileUserOptionsOpen"
              class="nav-items-style mobile"
            >
              <span>{{ user?.name }}</span>
              <i class="ml-1 fa-solid fa-chevron-down text-xs transition-transform duration-200" :class="{ 'rotate-180': isMobileUserOptionsOpen }"></i>
            </button>
            
            <ul v-if="isMobileUserOptionsOpen" class="bg-gray-50 flex flex-col">
              <li>
                <a class="nav-items-style mobile block px-6 py-2 text-sm text-gray-600 hover:text-rose-500 flex items-center gap-2" href="#"> 
                  <i class="mt-1 mr-1 fa fa-user-circle text-rose-400"></i> Perfil 
                </a>
              </li>
              <li>
                <a class="nav-items-style mobile block px-6 py-2 text-sm text-gray-600 hover:text-rose-500 flex items-center gap-2" href="#"> 
                   <i class="mt-1 mr-1 fa fa-shopping-cart text-rose-400"></i> Mi carrito 
                </a>
              </li>
              <li>
                <button @click="handleLogout" class="nav-items-style mobile w-full text-left px-6 py-2 text-sm text-gray-600 hover:text-rose-500 flex items-center gap-2">
                  <i class="mt-1 mr-1 fa fa-sign-out text-rose-400"></i> Cerrar Sesión
                </button>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>
<script setup>
  import { computed, ref, onMounted, onUnmounted } from 'vue';
  import { useRouter } from 'vue-router';
  import { storeToRefs } from 'pinia';
  import { useLayoutStore } from '@/stores/layout';
  import { useAuthStore } from '@/stores/auth';

  const router = useRouter();
  const layoutStore = useLayoutStore();
  const authStore = useAuthStore();
  const isMobileMenuOpen = ref(false);
  const isMobileUserOptionsOpen = ref(false);
  const isUserMenuOpen = ref(false);
  const userMenuContainer = ref(null);

  // Close menu when clicking outside
  const closeUserMenu = (e) => {
    if (isUserMenuOpen.value && userMenuContainer.value && !userMenuContainer.value.contains(e.target)) {
      isUserMenuOpen.value = false;
    }
  };

  onMounted(() => {
    document.addEventListener('click', closeUserMenu);
  });

  onUnmounted(() => {
    document.removeEventListener('click', closeUserMenu);
  });

  const { headerStyle, headerColor } = storeToRefs(layoutStore);
  const { isAuthenticated, user } = storeToRefs(authStore);

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
    } catch (error) {
      console.error('Error al cerrar sesión:', error);
    } finally {
      router.push('/login');
    }
  };
</script>