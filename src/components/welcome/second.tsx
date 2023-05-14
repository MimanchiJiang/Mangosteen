import { defineComponent } from "vue";
import s from "./First.module.scss";
import clock from "../../assets/clock.svg";
import { RouterLink } from "vue-router";
export const Second = defineComponent({
  setup: (props, context) => {
    return () => (
      <div class={s.wrapper}>
        <div class={s.card}>
          <img class={s.pig} src={clock} alt="" />
          <span class={s.span}>
            每日提醒<br></br>不会遗漏每一笔账单
          </span>
        </div>
        <div class={s.action}>
          <RouterLink class={s.fake} to="/start">
            跳过
          </RouterLink>
          <RouterLink class={s.next} to="/welcome/3">
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
