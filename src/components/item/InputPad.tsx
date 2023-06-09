import { defineComponent, PropType, ref } from "vue";
import s from "./InputPad.module.scss";
import { time } from "../../shared/time";
import { Icon } from "../../shared/Icon";
import { DatetimePicker, Popup } from "vant";
export const InputPad = defineComponent({
  setup: (props, context) => {
    const refDatePickerVisible = ref(false);
    const showDatePicker = () => (refDatePickerVisible.value = true);
    const hideDatePicker = () => (refDatePickerVisible.value = false);
    const now = new Date();
    const refDate = ref<Date>(now);
    console.log(refDate.value);
    const setDate = (date: Date) => {
      refDate.value = date;
      hideDatePicker();
    };
    const buttons = [
      { text: "1", onClick: () => {} },
      { text: "2", onClick: () => {} },
      { text: "3", onClick: () => {} },
      { text: "清空", onClick: () => {} },
      { text: "4", onClick: () => {} },
      { text: "5", onClick: () => {} },
      { text: "6", onClick: () => {} },
      { text: "+", onClick: () => {} },
      { text: "7", onClick: () => {} },
      { text: "8", onClick: () => {} },
      { text: "9", onClick: () => {} },
      { text: "-", onClick: () => {} },
      { text: ".", onClick: () => {} },
      { text: "0", onClick: () => {} },
      { text: "删", onClick: () => {} },
      { text: "提交", onClick: () => {} },
    ];
    return () => (
      <>
        <div class={s.dateAndAmount}>
          <span class={s.date}>
            <Icon class={s.icon} name="date"></Icon>
            <span>
              <span onClick={showDatePicker}>
                {time(refDate.value).format()}
              </span>
              <Popup
                position="bottom"
                v-model:show={refDatePickerVisible.value}
              >
                <DatetimePicker
                  value={refDate.value}
                  type="date"
                  title="选择年月日"
                  onConfirm={setDate}
                  onCancel={hideDatePicker}
                />
              </Popup>
            </span>
          </span>
          <span class={s.amount}>12342.223</span>
        </div>
        <div class={s.buttons}>
          {buttons.map((button) => (
            <button onClick={button.onClick}>{button.text}</button>
          ))}
        </div>
      </>
    );
  },
});
