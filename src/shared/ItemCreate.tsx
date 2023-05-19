import { defineComponent, ref } from "vue";
import s from "./ItemCreate.module.scss";
import { MainLayout } from "../layouts/MainLayout";
import { Icon } from "./Icon";
import { Tab, Tabs } from "./Tabs";
import { InputPad } from "../components/item/InputPad";
export const ItemCreate = defineComponent({
  setup: (props, context) => {
    const kind = ref("支出");
    return () => (
      <MainLayout>
        {{
          title: () => "记一笔",
          icon: () => <Icon name="left" class={s.icon}></Icon>,
          default: () => (
            <>
              {/* <Tabs
                selected={kind.value}
                onUpdateSelected={(name: string) => (kind.value = name)}
              > */}
              <Tabs v-model:selected={kind.value}>
                <Tab name="支出">icon 列表</Tab>
                <Tab name="收入">icon 列表2</Tab>
              </Tabs>
              <div class={s.inputPad_wrapper}>
                <InputPad />
              </div>
            </>
          ),
        }}
      </MainLayout>
    );
  },
});
