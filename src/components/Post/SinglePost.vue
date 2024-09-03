<template>
  <div>Single Posts component</div>
  <Category></Category>
  <div>{{ main }}</div>
</template>

<script setup>
import Category from "./Category.vue";

import { inject } from "vue";

const main = inject("main");
</script>
