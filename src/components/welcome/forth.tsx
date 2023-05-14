import { defineComponent } from "vue";
import s from "./First.module.scss";
import clouds from "../../assets/clouds.svg";
import { RouterLink } from "vue-router";
export const Forth = defineComponent({
  setup: (props, context) => {
    return () => (
      <div class={s.wrapper}>
        <div class={s.card}>
          <img class={s.pig} src={clouds} alt="" />
          <span class={s.span}>
            会挣钱<br></br>还要会省钱
          </span>
        </div>
        <div class={s.action}>
          <RouterLink class={s.fake} to="/start">
            跳过
          </RouterLink>
          <RouterLink class={s.next} to="/welcome/2">
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
