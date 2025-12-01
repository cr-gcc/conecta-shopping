<template>
  <div class="login-wallpaper">
    <div class="flex justify-center items-center h-screen pt-16 md:pt-0">
      <div class="card card-transparent w-80 shadow-sm">
        <figure class="px-10 pt-8 pb-3">
          <img class="h-9" src="/img/logos/logo-conecta.png" alt="Conecta Shopping">
        </figure>
        <form @submit.prevent="handleLogin">
          <div class="card-body items-start">
            <p class="text-xs md:text-sm">Correo Electrónico</p>
            <input 
              v-model="credentials.email" 
              type="email" 
              class="input input-xs md:input-sm input-secondary w-full" 
              required
              :disabled="isLoading"
            />
            <p class="text-xs md:text-sm">Contraseña</p>
            <div class="relative w-full">
              <input 
                v-model="credentials.password"
                :type="showPassword ? 'text' : 'password'" 
                class="input input-xs md:input-sm input-secondary w-full pr-10" 
                required
                :disabled="isLoading"
              />
              <span @click="togglePassword" class="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer z-10">
                <i class="text-rose-500" :class="showPassword ? 'fa-solid fa-eye-slash' : 'fa-solid fa-eye'"></i>
              </span>
            </div>
            <a href="#" class="mt-2 text-[9px] md:text-[10px]">Olvidé mi contraseña</a>
            <a href="#" class="text-[9px] md:text-[10px]">¿Necesitas ayuda?</a>
            
            <p v-if="errorMessage" class="text-rose-500 text-xs font-semibold mt-2">{{ errorMessage }}</p>
          </div>
          <div class="card-body pt-0 items-end">
            <button 
              type="submit"
              class="btn btn-xs md:btn-sm btn-outline btn-secondary" 
              :disabled="isLoading"
            >
              <span v-if="!isLoading">Continuar</span>
              <span v-if="isLoading" class="loading loading-spinner text-secondary"></span>
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useAuthStore } from '@/stores/auth';
import { usePageLayout } from '@/composables/usePageLayout';

const router = useRouter();
const authStore = useAuthStore();

const showPassword = ref(false);
const isLoading = ref(false);
const errorMessage = ref('');

const credentials = ref({
  email: '',
  password: ''
});

const togglePassword = () => {
  showPassword.value = !showPassword.value;
};

const handleLogin = async () => {
  isLoading.value = true;
  errorMessage.value = '';
  
  try {
    await authStore.login(credentials.value);
    // Redirect to home on successful login
    router.push('/');
  } catch (error) {
    console.error('Login error:', error);
    errorMessage.value = error.response?.data?.message || 'Error al iniciar sesión. Verifica tus credenciales.';
  } finally {
    isLoading.value = false;
  }
};

usePageLayout({
  heroVisible: false,
  heroType: 'none',
  headerStyle: 'white',
  footerVisible: false
});
</script>

<style scoped>
  .login-wallpaper {
    background-image: url('/img/banners/banner-login.jpg');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    min-height: 100vh;
    display: block;
  }
  .card-transparent {
		background-color: rgba(255, 255, 255, 0.8);
		border: 1px solid rgba(255, 255, 255, 0.3);
  }
</style>