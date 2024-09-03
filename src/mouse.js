import { ref } from "vue";
import { useEventListener } from "./event";

export function useMouse() {
  const x = ref(null);
  const y = ref(null);

  function updatePosition(event) {
    x.value = event.pageX;
    y.value = event.pageY;
  }

  //   onMounted(() => {
  //     window.addEventListener("mousemove", updatePosition);
  //   });

  //   onUnmounted(() => {
  //     window.removeEventListener("mousemove", updatePosition);
  //   });
  useEventListener(window, "mousemove", updatePosition);
  return { x, y };
}
