import { PropType, defineComponent } from "vue";
import { MainLayout } from "../layouts/MainLayout";
import { Icon } from "./Icon";
import s from "./Tabs.module.scss";
export const Tabs = defineComponent({
  props: {
    selected: {
      type: String as PropType<string>,
    },
    onUpdateSelected: {
      type: Function as PropType<(name: string) => void>,
    },
  },
  setup: (props, context) => {
    const tabs = context.slots.default?.();

    if (!tabs) return () => null;
    for (let i = 0; i < tabs.length; i++) {
      if (tabs[i].type !== Tab) {
        throw new Error("<Tabs> only accepts <Tab> as children");
      }
    }
    return () => (
      <div class={s.tabs}>
        <ol class={s.tabs_nav}>
          {tabs.map((item) => (
            <li
              onClick={() => context.emit("update:selected", item.props?.name)}
              class={item.props?.name === props.selected ? s.selected : ""}
            >
              {item.props?.name}
            </li>
          ))}
        </ol>
        <div>{tabs.find((item) => item.props?.name === props.selected)}</div>
      </div>
    );
  },
});

export const Tab = defineComponent({
  props: {
    name: {
      type: String as PropType<string>,
    },
  },
  setup: (props, context) => {
    return () => <div>{context.slots.default?.()}</div>;
  },
});
