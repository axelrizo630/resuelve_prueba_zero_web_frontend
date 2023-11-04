import BaseLayout from "@/layouts/BaseLayout.vue";
import EmptyLayout from "@/layouts/EmptyLayout.vue";
import ChuckNorrisJokesView from "@/views/ChuckNorrisJokesView.vue";
import CompoundInterestCalculationView from "@/views/CompoundInterestCalculationView.vue";
import LoginView from "@/views/LoginView.vue";
import NotFoundView from "@/views/NotFoundView.vue";
import { RouteRecordRaw, createRouter, createWebHistory } from "vue-router";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    beforeEnter: (_to, _from, next) => {
      const token = localStorage.getItem("token");
      if (!token) return next({ name: "Login" });
      next();
    },
    children: [
      {
        path: "/",
        component: BaseLayout,
        children: [
          {
            path: "",
            component: ChuckNorrisJokesView,
            name: "ChuckNorrisJokes",
          },
          {
            path: "compound-interest-calculation",
            component: CompoundInterestCalculationView,
            name: "CompoundInterestCalculation",
          },
        ],
      },
    ],
  },
  {
    path: "/",
    component: EmptyLayout,
    children: [
      { path: "login", component: LoginView, name: "Login" },
      {
        path: "/:pathMatch(.*)*",
        component: NotFoundView,
        name: "NotFound",
      },
    ],
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
