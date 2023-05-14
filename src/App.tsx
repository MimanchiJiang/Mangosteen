import { defineComponent, ref } from "vue";
import { RouterLink, RouterView } from "vue-router";
import "./App.scss";

export const App = defineComponent({
  setup() {
    const refCount = ref(0);
    const onClick = () => {
      refCount.value += 1;
    };
    return () => (
      <div>
        <RouterView></RouterView>
      </div>
    );
  },
});
