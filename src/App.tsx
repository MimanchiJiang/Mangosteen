import { defineComponent, ref } from "vue";
import { RouterLink, RouterView } from "vue-router";

export const App = defineComponent({
  setup() {
    const refCount = ref(0);
    const onClick = () => {
      refCount.value += 1;
    };
    return () => (
      <>
        <header>
          导航
          <ul>
            <li>
              <RouterLink to="/">Foo </RouterLink>
            </li>
            <li>
              <RouterLink to="about">Bar</RouterLink>
            </li>
          </ul>
        </header>
        <div>
          <RouterView></RouterView>
        </div>
        <footer>页脚</footer>
      </>
    );
  },
});
