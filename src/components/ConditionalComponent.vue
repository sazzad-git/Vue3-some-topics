<template>
  <div>
    <h3>Conditional rendering</h3>
    <div><button @click="isAwesome = !isAwesome">toggle</button></div>
    <div v-if="isAwesome">Vue is Awesome</div>
    <!-- <div v-if="!isAwesome">Oh No!! it is not awesome</div> -->
    <div v-else>Oh No!! it is not awesome</div>

    <div v-show="isAwesome">V-Show property</div>

    <div v-if="type === 1">1</div>
    <div v-else-if="type === 2">2</div>
    <div v-else-if="type === 3">3</div>
    <div v-else>Not a number</div>

    <template v-if="showPera">
      <h4>Paragraph heading</h4>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam
        excepturi inventore enim voluptate non porro distinctio doloribus
        eligendi, vel perspiciatis?
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias,
        magnam.\
      </p>
    </template>
  </div>
</template>

<script setup>
import { ref } from "vue";
const isAwesome = ref(true);

const type = ref(0);

const showPera = ref(false);

setInterval(() => {
  type.value++;
}, 3000);
</script>
