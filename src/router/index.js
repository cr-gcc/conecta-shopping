import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Home.vue';

const routes = [
	{ 
		name: 'Home Page',
		path: '/', 
		component: Home,
		meta: { 
			requiresAuth: true 
		}
	}
]

const router = createRouter({
  history: createWebHistory('/conecta/'),
  routes,
});

export default router;