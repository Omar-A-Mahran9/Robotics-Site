import { createRouter, createWebHistory } from "vue-router";
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
    meta: {
      title: "الصفحة الرئيسية",
      photo: " HomeVector.svg",
    },
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
    meta: {
      title: "عن الاتحاد",
      photo: "Ithad.svg",
    },
  },

  {
    path: "/achievemnet",
    name: "achievemnet",
    component: Achievemnet,
    meta: {
      title: "البطولات",
      photo: "Botolat.svg",
    },
  },
  {
    path: "/motivate",
    name: "motivat",
    component: Motivate,
    meta: {
      title: "المركز الاعلامي",
      photo: "I3lam.svg",
    },
  },
  {
    path: "/action",
    name: "action",
    component: Action,
    meta: {
      title: "الفعاليات",
      photo: " fa3lyat.svg",
    },
  },
  {
    path: "/report",
    name: "report",
    component: Reports,
    meta: {
      title: "التقارير",
      photo: " reports.svg",
    },
  },
  {
    path: "/event",
    name: "event",
    component: Event,
    meta: {
      title: " ",
      photo: "  ",
    },
  },
  {
    path: "/news",
    name: "news",
    component: News,
    meta: {
      title: " ",
      photo: "  ",
    },
  },
  {
    path: "/heroes",
    name: "heroes",
    component: Heroes,
    meta: {
      title: " ",
      photo: "  ",
    },
  },

  {
    path: "/contact",
    name: "contact",
    component: Contact,
    meta: {
      title: " ",
      photo: "  ",
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
