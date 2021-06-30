import Bio from "@/views/Bio.vue";
import "../assets/animations/transitions.scss";
import Blog from "@/views/Blog.vue";

import {
  createRouter,
  createWebHistory,
  RouteRecordRaw,
} from "vue-router";
import Home from "../views/Home.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      transition: "slide-right",
    },
  },
  {
    path: "/bio",
    name: "Bio",
    component: Bio,
    meta: {
      transition: "slide-up",
    },
  },
  {
    path: "/blog",
    name: "Blog",
    component: Blog,
    meta: {
      transition: "slide-left",
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
