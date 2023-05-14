import { defineComponent } from "vue";
import s from "./First.module.scss";
import chart from "../../assets/chart.svg";
import { RouterLink } from "vue-router";
export const Third = defineComponent({
  setup: (props, context) => {
    return () => (
      <div class={s.wrapper}>
        <div class={s.card}>
          <img class={s.pig} src={chart} alt="" />
          <span class={s.span}>
            数据可视化<br></br>收支一目了然
          </span>
        </div>
        <div class={s.action}>
          <RouterLink class={s.fake} to="/start">
            跳过
          </RouterLink>
          <RouterLink class={s.next} to="/welcome/4">
            下一页
          </RouterLink>{" "}
          <RouterLink class={s.next} to="/start">
            跳过
          </RouterLink>
        </div>
      </div>
    );
  },
});
