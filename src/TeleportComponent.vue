<template>
  <div class="container">
    <div class="content">
      <h3>Teleport Component</h3>
      <div><MyModal /></div>
    </div>
  </div>
</template>

<script setup>
import MyModal from "./components/MyModal.vue";
</script>

<style>
html,
body,
#app {
  height: 100%;
}

.container {
  height: 100vh;
  display: grid;
  justify-content: center;
  align-items: center;
}

.content {
  max-width: 400px;
  position: relative;
}
</style>
