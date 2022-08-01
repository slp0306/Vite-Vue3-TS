import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

const BASE_URL = import.meta.env.BASE_URL;

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/three',
  },
  {
    path: '/three',
    component: () => import('@/components/Three.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(BASE_URL),
  routes,
});

export default router;
