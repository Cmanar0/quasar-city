import { route } from 'quasar/wrappers';
import { createMemoryHistory, createRouter, createWebHashHistory, createWebHistory } from 'vue-router';

import { useAuthStore } from '../stores/auth.store';
import routes, { routeNames } from './routes';

const createHistory = process.env.SERVER ? createMemoryHistory : process.env.VUE_ROUTER_MODE === 'history' ? createWebHistory : createWebHashHistory;

const router = createRouter({
  scrollBehavior: () => ({
    left: 0,
    top: 0,
  }),
  routes,
  history: createHistory(process.env.VUE_ROUTER_BASE),
});

export default route(() => router);

const publicRoutes = [routeNames.signIn, routeNames.register, routeNames.emailVerify];

router.beforeEach(async (to, from, next) => {
  const authStore = useAuthStore();

  // If the user has no token and the route is NOT public, redirect to login
  if (!authStore.accessToken && !publicRoutes.includes(to.name)) {
    next({ name: routeNames.signIn });
  }
  // If user has a token and tries to access signIn, redirect to home
  else if (authStore.accessToken && to.name === routeNames.signIn) {
    next({ name: routeNames.home });
  }
  // Allow normal navigation, but fetch user info if needed
  else {
    if (!authStore.user && !publicRoutes.includes(to.name)) {
      await authStore.me();
    }
    next();
  }
});
