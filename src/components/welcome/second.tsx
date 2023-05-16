import { defineComponent, ref, watchEffect } from "vue";
import s from "./First.module.scss";
import clock from "../../assets/icons/clock.svg";
import { RouterLink, useRouter } from "vue-router";
import { WelcomeLayout } from "../WelcomeLayout";
import { useSwipe } from "../../hooks/useSwipe";
export const Second = defineComponent({
  setup() {
    const div = ref<HTMLDivElement>();
    const { swiping, direction } = useSwipe(div, {
      beforeStart: (e) => e.preventDefault(),
    });
    const router = useRouter();
    watchEffect(() => {
      if (swiping.value && direction.value === "left") {
        router.push("/welcome/3");
      }
    });
    return () => (
      <WelcomeLayout ref={div}>
        {{
          icon: () => (
            <svg>
              <use xlinkHref="#clock"></use>
            </svg>
          ),
          title: () => (
            <span class={s.span}>
              每日提醒<br></br>不会遗漏每一笔账单
            </span>
          ),
        }}
      </WelcomeLayout>
    );
  },
});
