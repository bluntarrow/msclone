import { createRouter, createWebHistory } from "vue-router";

import Home from "./views/Home.vue";
import Library from "./views/Library.vue";
import AppPage from "./views/AppPage.vue";

const routes = [
  { path: "/", redirect: "/home" },
  { path: "/home", name:'home', component: Home },
  { path: "/library",name:'library', component: Library },
  { path: "/apps/:id",name:'app', component: AppPage },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
