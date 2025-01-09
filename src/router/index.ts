import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior() {
    return { top: 0 }
  },
  routes: [
    {
      path: '/',
      alias: '/home',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('@/views/ContactView.vue'),
    },
    {
      path: '/gallery',
      name: 'galery',
      component: () => import('@/views/GalleryView.vue'),
    },
    {
      path: '/:pathMatch(.*)*', // Matches all undefined routes
      name: 'NotFound',
      component: () => import('@/components/NotFound.vue'),
    },
  ],
})

export default router
