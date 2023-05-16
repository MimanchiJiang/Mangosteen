import { defineComponent, ref, watchEffect, Transition, VNode } from "vue";
import { RouterView, RouteLocationNormalizedLoaded } from "vue-router";
import { useSwipe } from "../hooks/useSwipe";
import s from "./Welcome.module.scss";
export const Welcome = defineComponent({
  setup: (props, context) => {
    const main = ref<HTMLElement | undefined>();
    const { direction, swiping } = useSwipe(main);
    watchEffect(() => {
      console.log(swiping.value, direction.value);
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
          {/* <RouterView name="main">
            {(obj: any) => (
              <Transition name="slide-fade">
                <obj.Component />
              </Transition>
            )}
          </RouterView> */}
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
