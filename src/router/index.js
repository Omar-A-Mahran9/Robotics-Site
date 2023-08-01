import { createRouter, createWebHashHistory } from "vue-router";
// import HomeView from "../views/HomeView.vue";
import Home from "@/views/HomeView.vue";
import About from "@/views/AboutView.vue";
import Reports from "@/views/ReportsView.vue";
import Achievemnet from "@/views/AchieVemnet.vue";
import Action from "@/views/ActionView.vue";
import Contact from "@/views/ContactView.vue";
import Motivate from "@/views/MotivateView.vue";
import News from "@/views/NewsView.vue";
import Event from "@/views/EventView.vue";
import Heroes from "@/views/HeroesView.vue";
const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () =>
    //   import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
    component: About,
  },
  {
    path: "/report",
    name: "report",
    component: Reports,
  },
  {
    path: "/achievemnet",
    name: "achievemnet",
    component: Achievemnet,
  },
  {
    path: "/action",
    name: "action",
    component: Action,
  },
  {
    path: "/contact",
    name: "contact",
    component: Contact,
  },
  {
    path: "/motivate",
    name: "motivat",
    component: Motivate,
  },
  {
    path: "/news",
    name: "news",
    component: News,
  },
  {
    path: "/event",
    name: "event",
    component: Event,
  },
  {
    path: "/heroes",
    name: "heroes",
    component: Heroes,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
