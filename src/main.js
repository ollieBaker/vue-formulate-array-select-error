import Vue from 'vue';
import App from './App.vue';
import VueFormulate from '@braid/vue-formulate';

Vue.use(VueFormulate);

Vue.config.productionTip = false;

new Vue({
  render: function(h) {
    return h(App);
  }
}).$mount('#app');
