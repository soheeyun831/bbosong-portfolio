import Vue from "vue";
import App from "./App.vue";
import router from "./routes";
import store from "./store";
import VueWaypoint from "vue-waypoint";
import moment from "moment";
import VueMomentJS from "vue-momentjs";

// normalice.css 추가
import "normalize.css";

// 전역 scss
require("./assets/scss/index.scss");

// VueMomentJS plugin
Vue.use(VueMomentJS, moment);

// Waypoint plugin
Vue.use(VueWaypoint);

// polyfill - waypoint IE 지원을 위해..
require("intersection-observer");
Vue.config.productionTip = false;
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
