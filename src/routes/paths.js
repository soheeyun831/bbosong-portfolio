import Layout from "@/layout";

export default [
  {
    path: "/",
    name: "home",
    component: Layout,
    children: [
      {
        name: "Main",
        path: "",
        component: () => import("../pages/index.vue")
      }
    ]
  },
  {
    path: "/contact",
    name: "contact",
    component: Layout,
    children: [
      {
        path: "",
        component: () => import("../pages/Contact/index.vue")
      }
    ]
  },
  {
    path: "/career",
    component: Layout,
    children: [
      {
        path: "",
        component: () => import("../pages/Career/list/index.vue")
      },
      {
        path: "detail/:no",
        name: "careerDetail",
        component: () => import("../pages/Career/detail/index.vue")
      }
    ]
  },
  {
    path: "/portfolio",
    component: Layout,
    children: [
      {
        path: "",
        component: () => import("../pages/Portfolio/list/index.vue")
      },
      {
        path: "detail/:no",
        name: "portfolioDetail",
        component: () => import("../pages/Portfolio/detail/index.vue")
      }
    ]
  },
  // 404 path 는 마지막에 적어야 한다.
  {
    path: "*",
    name: "error",
    component: () => import("../layout/error.vue")
  }
];
