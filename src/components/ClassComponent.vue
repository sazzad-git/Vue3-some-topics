<template>
  <div class="po par">
    <h3 :class="$attrs.class">Class Binding</h3>
    <div :class="[isActive ? activeClass : '', errorClass]">
      Apply Active class
    </div>
    <div :class="[{ [activeClass]: isActive }, errorClass, $attrs.class]">
      Apply Active class
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from "vue";

// const classObject = reactive({
//   active: true,
//   "text-danger": true,
// });

const classObject = computed(() => {
  return {
    active: isActive.value && !hasError.value,
    "text-danger": hasError.value,
  };
});

const activeClass = ref("activess");
const errorClass = ref("text-danger");

const isActive = ref(true);
const hasError = ref(true);
</script>
