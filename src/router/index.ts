import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/playstation",
    name: "playstation",
    component: () => import("@/views/PlayStation.vue"),
  },
  {
    path: "/xbox",
    name: "xbox",
    component: () => import("@/views/Xbox.vue"),
  },
  {
    path: "/nintendo",
    name: "nintendo",
    component: () => import("@/views/Nintendo.vue"),
  },
  {
    path: "/portables",
    name: "portables",
    component: () => import("@/views/Portables.vue"),
  },
  {
    path: "/maintenance",
    name: "maintenance",
    component: () => import("@/views/Maintenance.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
