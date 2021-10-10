import { createRouter, createWebHistory } from 'vue-router';

// layouts

import Default from '@/layouts/Default.vue';
import Auth from '@/layouts/Auth.vue';

// views for Admin layout

import Dashboard from '@/views/admin/Dashboard.vue';

// views for Auth layout

import Login from '@/views/auth/Login.vue';
import Register from '@/views/auth/Register.vue';

// views without layouts

import Home from '@/views/Home.vue';

// views for Products layou 

 import Products from '@/views/products/Product.vue';
 import Add_product from '@/views/products/Add-product.vue';
 import Edit_product from '@/views/products/Edit-product.vue';
 
 // Views for Menbers layou

 import Menbers from '@/views/pages/Menbers.vue';

const routes = [
  {
    path: '/admin',
    redirect: '/admin/dashboard',
    component: Default,
    children: [
      {
        path: '/admin/dashboard',
        component: Dashboard,
      },
    ],
  },
  {
    path: '/admin',
    redirect: '/admin/dashboard/product',
    component: Default,
    children: [
      {
        path: '/admin/dashboard/products',
        component: Products,
      },
      {
        path: '/admin/dashboard/Add-products',
        component: Add_product,
      },
      {
        path: '/admin/dashboard/Edit-products',
        component: Edit_product,
      },
      {
        path: '/admin/dashboard/Menbers',
        component: Menbers,
      },
    ],
  },
  {
    path: '/auth',
    redirect: '/auth/login',
    component: Auth,
    children: [
      {
        path: '/auth/login',
        component: Login,
      },
      {
        path: '/auth/register',
        component: Register,
      },
    ],
  },
 
  {
    path: '/',
    name: 'Home',
    component: Home,
  },

 
 
 
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '@/views/About.vue'),
  },
 
  
  { path: '/:pathMatch(.*)*', redirect: '/' },
];

const router = createRouter({
  // history: createWebHashHistory(),
  history: createWebHistory(),
  routes,
});

export default router;
