import { defineComponent, ref } from "vue";
import { Button } from "../shared/Button";
import s from "./StartPage.module.scss";
import { FloatButton } from "../shared/FloatButton";
import { Center } from "../shared/Center";
import { Icon } from "../shared/Icon";
import { OverLay } from "../shared/OverLay";
import { RouterLink } from "vue-router";
import { router } from "../config/routes";

import { MainLayout } from "../layouts/MainLayout";
export const StartPage = defineComponent({
  setup: (props, context) => {
    const overlayVisible = ref(false);
    const pushCreate = () => {};
    const onClickMenu = () => {
      overlayVisible.value = !overlayVisible.value;
    };
    return () => (
      <MainLayout>
        {{
          title: () => "山竹记账",
          icon: () => <Icon class={s.icon} name="menu" onClick={onClickMenu} />,
          default: () => (
            <>
              <Center class={s.pig_wrapper}>
                <Icon name="pig" class={s.pig} />
              </Center>
              <RouterLink to={"/items/create"}>
                <div class={s.button_wrapper}>
                  <Button class={s.button}>开始记账</Button>
                </div>
              </RouterLink>

              <RouterLink to={"/items/create"}>
                <FloatButton iconName="add"></FloatButton>
              </RouterLink>

              {overlayVisible.value && (
                <OverLay
                  onClose={() => {
                    overlayVisible.value = false;
                  }}
                ></OverLay>
              )}
            </>
          ),
        }}
      </MainLayout>
    );
  },
});
