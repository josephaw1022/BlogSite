import Bio from "@/views/Bio.vue";
import Blog from "@/views/Blog.vue";
import {
  createRouter,
  createWebHistory,
  RouteRecordRaw,
} from "vue-router";
import "../animations/transitions.scss";
import Home from "../views/Home.vue";

import BlogDetail from "@/views/BlogDetail.vue";

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
    name: "BlogList",
    component: Blog,
    meta: {
      transition: "slide-left",
    },
  },
  {
    path: "/blog/:id",
    name: "BlogDetail",
    props: true,
    component: BlogDetail,
    meta: {
      transition: "slide-right",
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
