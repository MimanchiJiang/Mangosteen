import { createRouter, RouteRecordRaw, createWebHashHistory } from "vue-router";
import { Foo } from "../views/Foo";
import { Bar } from "../views/Bar";
import { history } from "../shared/history";
import { First } from "../components/welcome/First";
import { Second } from "../components/welcome/Second";
import { Third } from "../components/welcome/Third";
import { Forth } from "../components/welcome/Forth";
import { Welcome } from "../views/Welcome";
import { FirstActions } from "../components/welcome/FirstActions";
import { SecondActions } from "../components/welcome/SecondActions";
import { ThirdActions } from "../components/welcome/ThirdActions";
import { ForthActions } from "../components/welcome/ForthActions";
const routes: RouteRecordRaw[] = [
  { path: "/", redirect: "/welcome" },
  {
    path: "/welcome",
    component: Welcome,
    children: [
      { path: "", redirect: "/welcome/1" },
      {
        path: "1",
        components: { main: First, foot: FirstActions },
      },
      {
        path: "2",
        components: { main: Second, foot: SecondActions },
      },
      {
        path: "3",
        components: { main: Third, foot: ThirdActions },
      },
      {
        path: "4",
        components: { main: Forth, foot: ForthActions },
      },
    ],
  },
];

export const router = createRouter({
  history,
  routes,
});
