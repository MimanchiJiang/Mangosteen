import { RouterLink } from "vue-router";
import s from "./First.module.scss";

export const SecondActions = () => (
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
);
SecondActions.displayName = "SecondActions";
