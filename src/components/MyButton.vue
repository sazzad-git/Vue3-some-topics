<template>
  <button
    class="btn"
    style="color: yellow; font-size: 30px"
    @click="onChildClick"
  >
    Sample Button
  </button>
</template>
<script setup>
const onChildClick = () => {
  console.log("on Child click");
};
</script>
