import { createApp } from 'vue'
import { createPinia } from 'pinia';
import piniaPersistedState from 'pinia-plugin-persistedstate';
import router from './router';
import App from './App.vue'
import './style.css'

const appTitle = import.meta.env.VITE_APP_TITLE || "Conecta"
const app = createApp(App);
const pinia = createPinia();

document.title = appTitle
pinia.use(piniaPersistedState);

app.use(pinia);
app.use(router);
app.mount('#app');