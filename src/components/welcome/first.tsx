import { defineComponent } from "vue";
import s from "./First.module.scss";
import pig from "../../assets/pig.svg";
import { RouterLink } from "vue-router";
import { WelcomeLayout } from "../WelcomeLayout";
export const First = () => (
  <WelcomeLayout>
    {{
      icon: () => <img src={pig} />,
      title: () => (
        <span class={s.span}>
          会挣钱<br></br>还要会省钱
        </span>
      ),
    }}
  </WelcomeLayout>
);

First.displayName = "First";
