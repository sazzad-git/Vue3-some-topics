<template>
  <h2>Single post component 2</h2>
  <h3>{{ name }}</h3>

  <div>Post Details: {{ postDetails.title }}</div>

  <div>
    <button @click="updateTitle">Update title</button>
  </div>
</template>

<script setup>
import Person from "../Person";
const props = defineProps({
  //   id: [String, Number],
  name: {
    type: String,
    default: "Sazzad Web Dev",
  },
  postDetails: {
    title: Object,
    default(rowProps) {
      return { title: "Default", id: 100 };
    },
  },
  message: {
    validator(value) {
      return ["success", "warning", "danger"];
    },
  },
  updateTitle: {
    type: Function,
    default() {
      return "Welcome";
    },
  },
  person: {
    type: Person,
  },
});
</script>
