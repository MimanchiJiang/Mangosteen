import { defineComponent } from "vue";
import { RouterView } from "vue-router";
import s from "./Welcome.module.scss";
import logo from "../assets/logo.svg";
import { Layout } from "../components/Layout";
export const Welcome = defineComponent({
  setup: (props, context) => {
    return () => (
      <div class={s.wrapper}>
        <header>
          <img src={logo} alt="" />
          <h1>波罗记账</h1>
        </header>
        <main class={s.main}>
          <RouterView name="main"></RouterView>
        </main>
        <footer>
          <RouterView name="foot"></RouterView>
        </footer>
      </div>
    );
  },
});
