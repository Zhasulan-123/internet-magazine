import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/shop/Home.vue')
  },
  {
    path: '/basket',
    name: 'Basket',
    component: () => import('@/views/shop/Basket.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/admin/Login.vue')
  },
  {
    path: '/registration',
    name: 'Registration',
    component: () => import('@/views/admin/Registration.vue')
  },
  {
    path: '/admin',
    name: 'Admin',
    component: () => import('@/views/admin/Admin.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
