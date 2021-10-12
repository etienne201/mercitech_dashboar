import { createRouter, createWebHistory } from 'vue-router';

// Pages

import Dashboard from '@/pages/Dashboard.vue';
import Login from '@/pages/Login.vue';
import Page404 from '@/pages/404.vue';
import Products from '@/pages/Product.vue';
import AddProduct from '@/pages/AddProduct.vue';
import EditProduct from '@/pages/EditProduct.vue';
import Customers from '@/pages/Customers.vue';
import Analyses from '@/pages/Analyses.vue';
import Sales from '@/pages/Sales.vue';
import Modal from '@/pages/Modal.vue';
import Form from '@/pages/Form.vue';

/**
 * @type {import('vue-router').RouteRecordRaw[]}
 */
const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login,
    meta: { layout: 'empty' },
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard,
  },
  {
    path: '/products',
    name: 'Products',
    component: Products,
  },
  {
    path: '/product/add',
    name: 'AddProduct',
    component: AddProduct,
  },
  {
    path: '/product/edit',
    name: 'EditProduct',
    component: EditProduct,
  },
  {
    path: '/customers',
    name: 'Customers',
    component: Customers,
  },
  {
    path: '/analyses',
    name: 'Analyses',
    component: Analyses,
  },
  {
    path: '/sales',
    name: 'Sales',
    component: Sales,
  },
  {
    path: '/modal',
    name: 'Modal',
    component: Modal,
  },
  {
    path: '/form',
    name: 'Form',
    component: Form,
  },
  {
    path: '/404',
    name: 'PageNotFound',
    component: Page404,
    meta: { layout: 'empty' },
  },
  {
    path: '/settings',
    name: 'Settings',
    component: () => import('@/pages/Settings.vue'),
  },

  { path: '/:pathMatch(.*)*', redirect: '/404' },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
