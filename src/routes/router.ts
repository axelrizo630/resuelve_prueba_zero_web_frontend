import BaseLayout from "@/layouts/BaseLayout.vue";
import EmptyLayout from "@/layouts/EmptyLayout.vue";
import AboutView from "@/views/AboutView.vue";
import HomeView from "@/views/HomeView.vue";
import NotFoundView from "@/views/NotFoundView.vue";
import { RouteRecordRaw, createRouter, createWebHistory } from "vue-router";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    component: BaseLayout,
    children: [
      { path: "/", component: HomeView, name: "Home" },
      { path: "/about", component: AboutView, name: "About" },
    ],
  },
  {
    path: "/",
    component: EmptyLayout,
    children: [
      { path: "/:pathMatch(.*)*", component: NotFoundView, name: "NotFound" },
    ],
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
