import { createRouter, RouteRecordRaw, createWebHashHistory } from "vue-router";
import { Foo } from "../views/Foo";
import { Bar } from "../views/Bar";
import { history } from "../shared/history";
import { First } from "../components/welcome/first";
import { Second } from "../components/welcome/second";
import { Third } from "../components/welcome/third";
import { Forth } from "../components/welcome/forth";
import { Welcome } from "../views/Welcome";

const routes: RouteRecordRaw[] = [
  { path: "/", component: Foo },
  { path: "/about", component: Bar },
  {
    path: "/welcome",
    component: Welcome,
    children: [
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
