<template>
  <div>
    <h3>List Rendering</h3>
    <ul>
      <li v-for="(book, index) in books">
        {{ parentMessage }} - {{ index }} - {{ book.title }}
      </li>
      <li v-for="book of books" :key="book.id">
        {{ parentMessage }} - {{ book.title }}
        <div><input type="text" /></div>
      </li>
    </ul>

    <div><button @click="shuffle">Shuffle</button></div>

    <ul>
      <li v-for="(value, key, index) in myObject">
        {{ index }} - {{ key }} - {{ value }}
      </li>
    </ul>
    <template v-for="n in 10">
      <div>{{ n }} - Sazzadur Rahman Web</div>
      <div>Channel</div>
    </template>
  </div>
</template>

<script setup>
import { reactive, ref } from "vue";

const parentMessage = ref("parent");

const books = reactive([
  { id: 1, title: "Book1" },
  { id: 2, title: "Book2" },
  { id: 3, title: "Book3" },
  { id: 4, title: "Book4" },
]);

const myObject = reactive({
  title: "my title",
  author: "my author",
});

const shuffle = () => {
  books.sort(() => Math.random() - 0.5);
};
</script>
