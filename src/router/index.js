import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

// import VueRouter from "vue-router";
// import Store from "@/store/index.js";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/register",
      name: "register",
      component: () => import("../views/RegisterPage.vue"),
      meta: { requiresAuth: true },
    },
    {
      path: "/list",
      name: "list",
      component: () => import("../views/ListPage.vue"),
    },
    {
      path: "/edit",
      name: "edit",
      component: () => import("../views/EditPage.vue"),
    },
    {
      path: "/readtime",
      name: "readtime",
      component: () => import("../views/ReadTimePage.vue"),
    },
    {
      path: "/login",
      name: "login",
      component: () => import("../views/LoginPage.vue"),
    },
  ],
});

// const bouter = new VueRouter({
//   mode: "history",
//   base: ProcessingInstruction.env.BASE_URL,
//   routes
// })

// router.beforeEach((to, from, next) => {
//   if (to.matched.some(record => record.meta.requiresAuth) && !Store.state.userToken) {
//     next({ path: '/login', query: { redirect: to.fullPath } });
//   } else {
//     next();
//   }
// });

export default router;
