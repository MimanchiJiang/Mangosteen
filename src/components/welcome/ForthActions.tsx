import { RouterLink } from "vue-router";
import s from "./First.module.scss";

export const ForthActions = () => (
  <div class={s.action}>
    <RouterLink class={s.fake} to="/start">
      跳过
    </RouterLink>
    <RouterLink class={s.next} to="/start">
      下一页
    </RouterLink>{" "}
    <RouterLink class={s.next} to="/start">
      跳过
    </RouterLink>
  </div>
);
