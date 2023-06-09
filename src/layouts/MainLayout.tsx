import { defineComponent } from "vue";
import { NavBar } from "../shared/NavBar";

export const MainLayout = defineComponent({
  //   props: {
  //     name: {
  //       type: String as PropType<string>,
  //     },
  //   },
  setup: (props, context) => {
    return () => (
      <div>
        <NavBar>
          {{
            default: () => context.slots.title?.() || "山竹记账",
            icon: () => context.slots.icon?.() || "",
          }}
        </NavBar>
        {context.slots.default?.()}
      </div>
    );
  },
});
