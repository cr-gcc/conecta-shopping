import { createRouter, createWebHistory } from "vue-router";
import { useAuthStore } from "@/stores/auth";
import Login from "@/views/LoginView.vue";
import Home from "@/views/HomeView.vue";
import Partners from "@/views/Partners.vue";
import Rewards from "@/views/Rewards.vue";
import Products from "@/views/Products.vue";

const routes = [
  {
    name: "Login Page",
    path: "/login",
    component: Login,
    meta: {
      requiresAuth: false,
    },
  },
  {
    path: "/",
    component: Home,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/partners",
    component: Partners,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/rewards",
    component: Rewards,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/products",
    component: Products,
    meta: {
      requiresAuth: true,
    },
  },
];

const router = createRouter({
  history: createWebHistory("/conecta/"),
  routes,
});

router.beforeEach(async (to, from, next) => {
  const authStore = useAuthStore();
  if (to.meta.requiresAuth && !authStore.isAuthenticated) {
    next("/login");
  } else if (to.path === "/login" && authStore.isAuthenticated) {
    next("/");
  } else {
    next();
  }
});

export default router;
