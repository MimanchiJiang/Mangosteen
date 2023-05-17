import { defineComponent } from "vue";
import s from "./First.module.scss";
import { WelcomeLayout } from "../WelcomeLayout";
import { Icon } from "../../shared/Icon";
export const First = () => (
  <WelcomeLayout>
    {{
      icon: () => <Icon name="pig"></Icon>,
      title: () => (
        <span class={s.span}>
          会挣钱<br></br>还要会省钱
        </span>
      ),
    }}
  </WelcomeLayout>
);

First.displayName = "First";
