import { defineComponent } from "vue";
import s from "./First.module.scss";
import { RouterLink } from "vue-router";
import { WelcomeLayout } from "../WelcomeLayout";
export const First = () => (
  <WelcomeLayout>
    {{
      icon: () => (
        <svg>
          <use xlinkHref="#pig"></use>
        </svg>
      ),
      title: () => (
        <span class={s.span}>
          会挣钱<br></br>还要会省钱
        </span>
      ),
    }}
  </WelcomeLayout>
);

First.displayName = "First";
