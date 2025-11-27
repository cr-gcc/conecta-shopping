import { createRouter, createWebHistory } from 'vue-router';
import Login from '@/views/LoginView.vue';
import Home from '@/views/HomeView.vue';

const routes = [
	{
		name: 'Login Page',
		path: '/login',
		component: Login,
		meta: { 
			requiresAuth: false 
		}
	},
	{ 
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