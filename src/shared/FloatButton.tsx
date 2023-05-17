import { PropType, defineComponent } from "vue";
import { Icon, IconNames } from "./Icon";
import s from "./FloatButton.module.scss";
export const FloatButton = defineComponent({
  props: {
    iconName: {
      type: String as PropType<IconNames>,
    },
  },
  setup: (props, context) => {
    return () => (
      <div class={s.floatButton}>
        <Icon class={s.icon} name={props.iconName}></Icon>
      </div>
    );
  },
});
