import { defineComponent, ref, watchEffect } from "vue";
import s from "./First.module.scss";
import chart from "../../assets/icons/chart.svg";
import { RouterLink, useRouter } from "vue-router";
import { WelcomeLayout } from "../WelcomeLayout";
import { useSwipe } from "../../hooks/useSwipe";
export const Third = defineComponent({
  setup() {
    const div = ref<HTMLDivElement>();
    const { swiping, direction } = useSwipe(div, {
      beforeStart: (e) => e.preventDefault(),
    });
    const router = useRouter();
    watchEffect(() => {
      if (swiping.value && direction.value === "left") {
        router.push("/welcome/4");
      }
    });
    return () => (
      <WelcomeLayout ref={div}>
        {{
          icon: () => (
            <svg>
              <use xlinkHref="#chart"></use>
            </svg>
          ),
          title: () => (
            <span class={s.span}>
              数据可视化<br></br>收支一目了然
            </span>
          ),
        }}
      </WelcomeLayout>
    );
  },
});
