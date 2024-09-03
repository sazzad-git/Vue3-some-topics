<template>
  <h1>inline style bindings</h1>
  <div :style="{ color: activeColor, fontSize: fontSize + 'px' }">
    Applying Styles
  </div>
  <div :style="styleObject">Apply new style</div>
  <div :style="[baseStyle, style2]">Apply new style</div>
  <div :style="{ display: ['-webkit-box', '-ms-flexbox', 'flex'] }">
    Flex property
  </div>
  <div class="bottom" :style="styleObject2">Apply new style</div>
</template>

<script setup>
import { computed, reactive, ref } from "vue";
const activeColor = ref("red");
const fontSize = ref(30);

const baseStyle = reactive({
  color: "red",
  fontSize: "10px",
});

const style2 = reactive({
  color: "green",
  border: "1px solid blue",
});

const styleObject = reactive({
  color: "red",
  fontSize: "13px",
});
const styleObject2 = computed(() => {
  return {
    color: activeColor.value,
    fontSize: fontSize.value + "px",
  };
});

// activeColor.value = "blue";

setTimeout(() => {
  console.log("here");
  activeColor.value = "blue";
}, 5000);
</script>

<style scoped>
.bottom {
  margin-bottom: 20px;
}
</style>
