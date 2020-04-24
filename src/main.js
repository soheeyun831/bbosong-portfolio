import Vue from "vue";
import App from "./App.vue";
import router from "./routes";
import store from "./store";
import VueWaypoint from 'vue-waypoint'

// normalice.css 추가
import 'normalize.css'

// 전역 scss
require("./assets/scss/index.scss");

// Waypoint plugin
Vue.use(VueWaypoint)
Vue.config.productionTip = false;
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
