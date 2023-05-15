import { defineComponent } from "vue";
import s from "./First.module.scss";
import chart from "../../assets/chart.svg";
import { RouterLink } from "vue-router";
import { WelcomeLayout } from "../WelcomeLayout";
export const Third = () => (
  <WelcomeLayout>
    {{
      icon: () => <img src={chart} />,
      title: () => (
        <span class={s.span}>
          数据可视化<br></br>收支一目了然
        </span>
      ),
    }}
  </WelcomeLayout>
);

Third.displayName = "Third";
