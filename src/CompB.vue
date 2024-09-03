<template>
  <div>
    <input type="text" v-model="message" />
    <p>Message: {{ message }}</p>
  </div>
</template>

<script setup>
import { onActivated, onDeactivated, onMounted, onUnmounted, ref } from "vue";
const message = ref("");

onMounted(() => {
  console.log("on Mounted Comp B");
});

onUnmounted(() => {
  console.log("On Unmounted Comp B");
});

onActivated(() => {
  console.log("Activated B");
});

onDeactivated(() => {
  console.log("Deactivated A");
});
</script>
