<template>
  <div>
    <!-- <input
      type="text"
      :value="title"
      @input="$emit('update:title', $event.target.value)"
    /> -->
    <input type="text" :value="title" @input="update" />
  </div>
</template>

<script setup>
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  titleModifiers: {
    default: () => {},
  },
});

const emit = defineEmits(["update:title"]);

const update = (event) => {
  let value = event.target.value;
  if (props.titleModifiers["no-hyphens"]) {
    value = value.split("-").join(" ");
  }
  emit("update:title", value);
};
</script>

<!-- <script setup>
import { computed } from "vue";
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
});

const value = computed({
  get() {
    return props.title;
  },
  set(newValue) {
    console.log("computed");
    emit("update:title", newValue);
  },
});

const emit = defineEmits(["update:title"]);
</script> -->

<!-- <script setup>
const props = defineProps({
  modelValue: {
    type: String,
    required: true,
  },
});

const emit = defineEmits(["update:modelValue"]);
</script> -->
