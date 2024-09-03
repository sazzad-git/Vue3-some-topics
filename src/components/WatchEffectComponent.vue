<template>
  <div>WatchEffect Component</div>

  <div>todoId: <input type="text" v-model="todoId" /></div>
  <div>Count: <input type="text" v-model="count" /></div>

  <div id="channel">Channel Subscriber count: {{ count }}</div>
</template>

<script setup>
import { ref, watchPostEffect } from "vue";

const todoId = ref(1);
const data = ref(null);

const count = ref(0);
// watch(
//   todoId,
//   async () => {
//     let response = await fetch(
//       `https://jsonplaceholder.typicode.com/todos/${todoId.value}`
//     );
//     data.value = await response.json();
//   },
//   { immediate: true }
// );

// watchEffect(async () => {
//   console.log(count.value);
//   let response = await fetch(
//     `https://jsonplaceholder.typicode.com/todos/${todoId.value}`
//   );
//   data.value = await response.json();
//   document.getElementById("channel") &&
//     console.log(document.getElementById("channel").innerText);
// });

watchPostEffect(async () => {
  console.log(count.value);
  //   let response = await fetch(
  //     `https://jsonplaceholder.typicode.com/todos/${todoId.value}`
  //   );
  //   data.value = await response.json();
  document.getElementById("channel") &&
    console.log(document.getElementById("channel").innerText);
});
</script>
