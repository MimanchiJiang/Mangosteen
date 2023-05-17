import { defineComponent, ref } from "vue";
import { Button } from "../shared/Button";
import s from "./StartPage.module.scss";
import { FloatButton } from "../shared/FloatButton";
import { Center } from "../shared/Center";
import { Icon } from "../shared/Icon";
import { NavBar } from "../shared/NavBar";
import { OverLay } from "../shared/OverLay";
export const StartPage = defineComponent({
  setup: (props, context) => {
    const overlayVisible = ref(false);

    const onClickMenu = () => {
      overlayVisible.value = !overlayVisible.value;
    };
    return () => (
      <div>
        <NavBar class={s.navbar}>
          {{
            default: "山竹记账",
            icon: <Icon class={s.icon} name="menu" onClick={onClickMenu} />,
          }}
        </NavBar>
        <Center class={s.pig_wrapper}>
          <Icon name="pig" class={s.pig} />
        </Center>
        <div class={s.button_wrapper}>
          <Button class={s.button}>开始记账</Button>
        </div>
        <FloatButton iconName="add"></FloatButton>
        {overlayVisible.value && (
          <OverLay
            onClose={() => {
              overlayVisible.value = false;
            }}
          ></OverLay>
        )}
      </div>
    );
  },
});
