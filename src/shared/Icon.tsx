import { defineComponent, PropType } from "vue";
import s from "./Icon.module.scss";

export type IconNames =
  | "add"
  | "chart"
  | "clock"
  | "clouds"
  | "pig"
  | "logo"
  | "menu"
  | "export"
  | "remind"
  | "classify"
  | "left"
  | "notes"
  | "date";

export const Icon = defineComponent({
  props: {
    name: {
      type: String as PropType<IconNames>,
    },
    onClick: {
      type: Function as PropType<(e: MouseEvent) => void>,
    },
  },
  setup: (props, context) => {
    return () => (
      <svg class={s.icon} onClick={props.onClick}>
        <use xlinkHref={"#" + props.name}></use>
      </svg>
    );
  },
});
