// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';

import 'normalize.css/normalize.css'; // a modern alternative to CSS resets

import ElementUI from 'element-ui';

import './common/styles/element-variables.scss';
import '@/common/styles/index.scss'; // global css

import App from './App';
import router from './router';
import store from './store';
import axios from 'axios';
import './common/icons';
import globalConstant from '@/common/js/global-constant';

// import '@/common/js/permission';
import { getToken } from '@/utils/user';

Vue.prototype.GLOBAL = globalConstant;
Vue.prototype.$axios = axios;
Vue.config.productionTip = false;
Vue.use(ElementUI);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
});

// const hasToken = getToken();
router.beforeEach(async (to, from, next) => {
  if (getToken()) {
    // if is logged in, redirect to the home page
    localStorage.setItem('clusterNumber', 0);
    next();
  } else {
    /*  has no token */
    if (to.path === '/login') {
      // to login, go directly
      next();
    } else {
      // other pages that do not have permission to access are redirected to the login page.
      next('/login');
    }
  }
});
