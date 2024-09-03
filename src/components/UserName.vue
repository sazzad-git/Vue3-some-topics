<template>
  <div>
    <input
      type="text"
      placeholder="firstName"
      :value="firstName"
      @input="$emit('update:firstName', $event.target.value)"
    />
    <input
      type="text"
      placeholder="lastName"
      :value="lastName"
      @input="$emit('update:lastName', $event.target.value)"
    />
  </div>
</template>

<script setup>
defineProps({
  firstName: String,
  lastName: String,
});
</script>
