import { createApp } from 'vue';

// Store

import store from './store/index';

// styles

import '@/assets/styles/tailwind.css';

// mouting point for the whole app

import App from './App.vue';

// Routes

import router from './router';

// Layouts

import DashboardLayout from '@/layouts/DashboardLayout.vue';
import EmptyLayout from '@/layouts/EmptyLayout.vue';

createApp(App)
  .component('default-layout', DashboardLayout)
  .component('empty-layout', EmptyLayout)
  .use(store)
  .use(router)
  .mount('#app');
