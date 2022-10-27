import { createRouter, createWebHistory } from 'vue-router';
import authAdmin from "@/api/auth.admin";
import authUser from "@/api/auth.user";

const routes = [
  {
    path: '/',
    name: 'Home',
    meta: { title: 'Интернет Магазин'},
    component: () => import('@/views/shop/Home.vue')
  },
  {
    path: '/login',
    name: 'Login',
    meta: { title: 'Авторизация'},
    component: () => import('@/views/user/Login.vue')
  },
  {
    path: '/registration',
    name: 'Registration',
    meta: { title: 'Регистрация'},
    component: () => import('@/views/user/Registration.vue')
  },
  {
    path: '/user',
    name: 'User',
    meta: { title: 'Пользователь', user: true },
    component: () => import('@/views/user/User.vue')
  },
  {
    path: '/login-admin',
    name: 'AdminLogin',
    meta: { title: 'Панель управление'},
    component: () => import('@/views/admin/Login.vue')
  },
  {
    path: '/admin',
    name: 'Admin',
    meta: { title: 'Администратор', admin: true },
    component: () => import('@/views/admin/Admin.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  document.title = `${to.meta.title}`;
  const currentAdmin = authAdmin.isLoggedIn();
  const reqAuthAdmin = to.matched.some(record => record.meta.admin);
  if (reqAuthAdmin && !currentAdmin) {
    next('/login-admin')
  } else {
    next()
  }
});

router.beforeEach((to, from, next) => {
  document.title = `${to.meta.title}`;
  const currentUser = authUser.isLoggedIn();
  const reqAuthUser = to.matched.some(record => record.meta.user);
  if (reqAuthUser && !currentUser) {
    next('/login')
  } else {
    next()
  }
});

export default router
