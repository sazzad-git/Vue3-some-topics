<template>
  <div :id="dynamicId" :[tittleAttr]="tittleValue">Template code</div>
  <div v-bind="objectOfAttrs" v-html="message"></div>
  <div>{{ 1 + 1 }}</div>

  <!-- change click option -->
  <div @click="changeTittle()">{{ message ? "Yes" : "No" }}</div>
  <div @[eventName]="changeTittle()">{{ Math.random() }}</div>

  <!-- Eta kaj korbe na -->
  <!-- <div>{{ window.document }}</div> -->
</template>

<script setup>
const message = "<h1>Hello world</h1>";
const dynamicId = "my-id";
const tittleAttr = "tittle";
const tittleValue = "This is tittle";
const objectOfAttrs = {
  id: dynamicId,
  class: "container",
};

const changeTittle = () => alert("Hello world");

// dynamic event name

const eventName = "click";
</script>
