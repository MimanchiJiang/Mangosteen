import { FunctionalComponent } from "vue";
import s from "./welcome/First.module.scss";
export const WelcomeLayout: FunctionalComponent = (props, context) => {
  const { slots } = context;
  return (
    <div class={s.wrapper}>
      <div class={s.card}>
        {slots.icon?.()}
        {slots.title?.()}
      </div>
    </div>
  );
};

WelcomeLayout.displayName = "WelcomeLayout";
