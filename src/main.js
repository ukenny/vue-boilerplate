import Vue from "vue";
import App from "./App.vue";
import VueResource from "vue-resource";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import BootstrapVue from "bootstrap-vue";

import PortalVue from "portal-vue";

Vue.use(PortalVue);
Vue.use(BootstrapVue);
Vue.use(VueResource);
Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
