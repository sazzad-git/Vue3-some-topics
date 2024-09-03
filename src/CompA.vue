<template>
  <div>Count: {{ count }} <button @click="count++">+</button></div>
</template>

<script setup>
import { onActivated, onDeactivated, onMounted, onUnmounted, ref } from "vue";

const count = ref(0);

onMounted(() => {
  console.log("on Mounted Comp A");
});

onUnmounted(() => {
  console.log("On Unmounted Comp A");
});

onActivated(() => {
  console.log("Activated A");
});

onDeactivated(() => {
  console.log("Deactivated B");
});
</script>
