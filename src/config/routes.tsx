import { createRouter, RouteRecordRaw, createWebHashHistory } from "vue-router";
import { Foo } from "../views/Foo";
import { Bar } from "../views/Bar";
import { history } from "../shared/history";
import { First } from "../components/welcome/First";
import { Second } from "../components/welcome/Second";
import { Third } from "../components/welcome/Third";
import { Forth } from "../components/welcome/Forth";
import { Welcome } from "../views/Welcome";

const routes: RouteRecordRaw[] = [
  { path: "/", redirect: "/welcome" },
  {
    path: "/welcome",
    component: Welcome,
    children: [
      { path: "", redirect: "/welcome/1" },
      {
        path: "1",
        component: First,
      },
      {
        path: "2",
        component: Second,
      },
      {
        path: "3",
        component: Third,
      },
      {
        path: "4",
        component: Forth,
      },
    ],
  },
];

export const router = createRouter({
  history,
  routes,
});
