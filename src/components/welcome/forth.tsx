import { defineComponent } from "vue";
import s from "./First.module.scss";
import clouds from "../../assets/clouds.svg";
import { RouterLink } from "vue-router";
import { WelcomeLayout } from "../WelcomeLayout";

export const Forth = () => (
  <WelcomeLayout>
    {{
      icon: () => <img src={clouds} />,
      title: () => (
        <span class={s.span}>
          每日提醒<br></br>不会遗漏每一笔账单
        </span>
      ),
    }}
  </WelcomeLayout>
);
Forth.displayName = "Forth";
