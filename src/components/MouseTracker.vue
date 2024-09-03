<template>Mouse position is at: {{ x }}, {{ y }}</template>

<script setup>
import { useMouse } from "../mouse";
const { x, y } = useMouse();
</script>
