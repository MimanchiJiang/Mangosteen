import { defineComponent } from "vue";
import s from "./ItemsPage.module.scss";
import { MainLayout } from "../layouts/MainLayout";
import { Icon } from "../shared/Icon";
import { RouterView } from "vue-router";
export const ItemsPage = defineComponent({
  setup: (props, context) => {
    return () => <RouterView></RouterView>;
  },
});
