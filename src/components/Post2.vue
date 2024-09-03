<!-- Child to parents -->
<template>
  <div>
    <h3>Posts Details</h3>

    <div>
      Load Post Id:
      <button v-for="n in 5" :key="n" @click.prevent="postId = n">
        {{ n }}
      </button>
    </div>

    <div v-if="error">Error Encountered: {{ error.message }}</div>
    <div v-else-if="post">
      <!-- v-focus use only input element -->
      <PostSingle
        :post="post"
        :key="post.id"
        @edit-post="updatePost"
      ></PostSingle>
    </div>
    <div v-else>Loading...</div>
  </div>
</template>

<!-- <script>
export default {
  setup() {
    const { x, y } = useMouse();
  },
  mounted() {
    console.log(this.x);
  },
};
</script> -->

<script setup>
import { computed, ref } from "vue";
import { useFetch } from "../useFetch.js";
import PostSingle from "./PostSingle.vue";

const postId = ref("1");

// Implement async functionality logic using Composable in vue 3
const url = computed(() => {
  return `https://jsonplaceholder.typicode.com/posts/${postId.value}`;
});

const { post, error } = useFetch(url);

const updatePost = (postId, message) => {
  console.log(message);
  posts.value = posts.value.map((post) => {
    if (post.id === postId) return { ...post, title: "Post is updated" };
    return post;
  });
};
</script>
