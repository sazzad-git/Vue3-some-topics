import { onMounted, onUnmounted } from "vue";

export function useEventListener(target, eventType, callBack) {
  onMounted(() => {
    window.addEventListener(eventType, callBack);
  });

  onUnmounted(() => {
    window.removeEventListener(eventType, callBack);
  });
}
