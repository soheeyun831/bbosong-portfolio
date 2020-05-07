import Vue from "vue";
import Router from "vue-router";
import paths from "./paths";
import NProgress from "nprogress";
import "nprogress/nprogress.css";

Vue.use(Router);
NProgress.configure({ showSpinner: false });

const router = new Router({
  // mode: 'history', // 사용하려면.. https://router.vuejs.org/guide/essentials/history-mode.html#example-server-configurations
  scrollBehavior: () => ({ y: 0 }),
  routes: paths
});

router.beforeEach((to, from, next) => {
  NProgress.start();
  next();
});

router.afterEach(() => {
  NProgress.done();
});

export default router;
