import { defineComponent, ref, watchEffect } from "vue";
import s from "./First.module.scss";
import { useRouter } from "vue-router";
import { WelcomeLayout } from "../WelcomeLayout";
import { useSwipe } from "../../hooks/useSwipe";
export const First = defineComponent({
  setup() {
    const div = ref<HTMLDivElement>();
    const { swiping, direction } = useSwipe(div, {
      beforeStart: (e) => e.preventDefault(),
    });
    const router = useRouter();
    watchEffect(() => {
      if (swiping.value && direction.value === "left") {
        router.push("/welcome/2");
      }
    });
    return () => (
      <WelcomeLayout ref={div}>
        {{
          icon: () => (
            <svg>
              <use xlinkHref="#pig"></use>
            </svg>
          ),
          title: () => (
            <span class={s.span}>
              会挣钱<br></br>还要会省钱
            </span>
          ),
        }}
      </WelcomeLayout>
    );
  },
});
