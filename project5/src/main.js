// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
// import axios from 'axios'
import ViewUI from 'view-design';
import 'view-design/dist/styles/iview.css';
import VueRouter from 'vue-router';
import router from './router/index';


Vue.config.productionTip = false;

Vue.use(ViewUI);
Vue.use(VueRouter);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  // router:router,=>全写，下面的是简写
  
})

