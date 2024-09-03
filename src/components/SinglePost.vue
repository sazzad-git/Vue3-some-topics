<template>
  <div>Single Post Component</div>
  <h3>Children: {{ postDetails.title }}</h3>
</template>

<script setup>
// import { computed } from "vue";
// const props = defineProps(["postTitle"]);
const props = defineProps({
  postDetails: Object,
});

// const name = computed(() => props.title.trim().toLocaleLowerCase());
// console.log(name.value);

// props.postDetails.title = "Hi Leela";

setTimeout(() => {
  props.postDetails.title = "Hi Leela";
}, 4000);
</script>
