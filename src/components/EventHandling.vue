<template>
  <div>
    <h2>Event Handling</h2>
    <div>
      <!-- <button @click="count++">Counter</button> -->
      <button @click="increaseCounter('Sazzad', $event)">Counter</button>
      <div>Counter: {{ count }}</div>
    </div>

    <div @click.capture="onParentClick">
      <a href="http://www.google.com" @click.stop.prevent>Click Here</a>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const count = ref(0);

const increaseCounter = (name, event) => {
  count.value++;
  console.log(name);
  console.log(event.target.tagName);
};

const onLinkClick = (event) => {
  event.preventDefault();
  console.log("Link Click");
};

const onParentClick = () => {
  console.log("Parent Click");
};
</script>
