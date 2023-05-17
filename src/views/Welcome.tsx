import { defineComponent, ref, watchEffect, Transition, VNode } from "vue";
import {
  RouterView,
  RouteLocationNormalizedLoaded,
  useRoute,
} from "vue-router";
import { useSwipe } from "../hooks/useSwipe";
import s from "./Welcome.module.scss";
import { router } from "../config/routes";
import { throttle } from "../shared/throttle";
const pushMap: Record<string, string> = {
  welcome1: "/welcome/2",
  welcome2: "/welcome/3",
  welcome3: "/welcome/4",
  welcome4: "/start",
};

export const Welcome = defineComponent({
  setup: (props, context) => {
    const main = ref<HTMLElement | undefined>();
    const { direction, swiping } = useSwipe(main, {
      beforeStart: (e) => e.preventDefault(),
    });
    const route = useRoute();

    const push = throttle(() => {
      const name = (route.name || "welcome1").toString();
      router.push(pushMap[name]);
    }, 400);
    watchEffect(() => {
      if (swiping.value && direction.value === "left") {
        push();
      }
    });
    return () => (
      <div class={s.wrapper}>
        <header>
          <svg>
            <use xlinkHref="#logo"></use>
          </svg>
          <h1>波罗记账</h1>
        </header>
        <main class={s.main} ref={main}>
          <RouterView name="main">
            {({
              Component: X,
              route: R,
            }: {
              Component: VNode;
              route: RouteLocationNormalizedLoaded;
            }) => (
              <Transition
                enterFromClass={s.slide_fade_enter_from}
                enterActiveClass={s.slide_fade_enter_active}
                leaveToClass={s.slide_fade_leave_to}
                leaveActiveClass={s.slide_fade_leave_active}
              >
                {X}
              </Transition>
            )}
          </RouterView>
        </main>
        <footer>
          <RouterView name="foot"></RouterView>
        </footer>
      </div>
    );
  },
});
