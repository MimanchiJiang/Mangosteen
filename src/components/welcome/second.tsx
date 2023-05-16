import { defineComponent } from "vue";
import s from "./First.module.scss";
import clock from "../../assets/clock.svg";
import { RouterLink } from "vue-router";
import { WelcomeLayout } from "../WelcomeLayout";
export const Second = () => (
  <WelcomeLayout>
    {{
      icon: () => (
        <svg>
          <use xlinkHref="#clock"></use>
        </svg>
      ),
      title: () => (
        <span class={s.span}>
          每日提醒<br></br>不会遗漏每一笔账单
        </span>
      ),
    }}
  </WelcomeLayout>
);

Second.displayName = "Second";
