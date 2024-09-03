<template>
  <div>
    <h2>From Input Bindings</h2>

    <div>
      <!-- <input
        type="text"
        :value="text"
        @input="(event) => (text = event.target.value)"
      /> -->
      <input type="text" v-model="text" />
      <div>{{ text }}</div>
    </div>

    <div>
      <textarea v-model="message" name="" id="" cols="30" rows="10"></textarea>
      <div style="white-space: pre-line">{{ message }}</div>
    </div>

    <div>
      <input
        type="checkbox"
        name=""
        id=""
        v-model="checked"
        true-value="Yes"
        false-value="No"
      />
      <div>{{ checked }}</div>
    </div>

    <div>
      <input type="checkbox" value="Sazzad" v-model="checkName" />
      <input type="checkbox" value="Web" v-model="checkName" />
      <input type="checkbox" value="Dev" v-model="checkName" />
      {{ checkName }}
    </div>

    <!-- Radio -->
    <div>
      <input type="radio" value="one" v-model="picked" /> one
      <input type="radio" value="two" v-model="picked" /> two
      <br />
      {{ picked }}
    </div>

    <!-- Select -->
    <div>
      <div>Selected Value:{{ selected }}</div>
      <select v-model="selected">
        <option value="">A</option>
        <option value="">B</option>
        <option value="">C</option>
        <option value="">D</option>
      </select>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const text = ref("Sazzad");
const message = ref("Sazzad");
const checked = ref("Yes");
const checkName = ref([]);
const picked = ref("");
const selected = ref("A");
</script>
