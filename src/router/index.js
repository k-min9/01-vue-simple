// src/router/index.js
import Vue from 'vue';
import Router from 'vue-router';
import MainPage from '../components/MainPage.vue';
import ApplicationMain from '../components/ApplicationMain.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'MainPage',
      component: MainPage
    },
    {
      path: '/application',
      name: 'ApplicationMain',
      component: ApplicationMain,
      props: route => ({
        apiResponse: route.params.apiResponse,
        selectedCustomer: route.params.selectedCustomer,
        selectedProduct : route.params.selectedProduct
      })
    }
  ],
  mode: "history"
});
