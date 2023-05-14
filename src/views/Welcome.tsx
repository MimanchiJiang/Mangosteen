import { defineComponent } from "vue";
import { RouterView } from "vue-router";
import s from "./Welcome.module.scss";
import logo from "../assets/logo.svg";
export const Welcome = defineComponent({
  setup: (props, context) => {
    return () => (
      <div class={s.wrapper}>
        <header>
          <img src={logo} alt="" />
          <h1>波罗记账</h1>
        </header>
        <main class={s.main}>
          <RouterView></RouterView>
        </main>
      </div>
    );
  },
});