import { isRef, ref, unref, watchEffect } from "vue";

export function useFetch(url) {
  const post = ref(null);
  const error = ref(null);

  async function doFetch() {
    post.value = null;
    error.value = null;
    const urlValue = unref(url);

    try {
      await timeout();
      const res = await fetch(urlValue);
      post.value = await res.json();
    } catch (e) {
      error.value = e;
    }
  }

  if (isRef(url)) {
    watchEffect(doFetch);
  } else {
    doFetch();
  }
  // reacting to the ref value state changes in composable in vue 3
  function timeout() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (Math.random() < 0.3) {
          reject(new Error("Random Error"));
        } else {
          resolve();
        }
      }, 500);
    });
  }

  return { post, error };
}
