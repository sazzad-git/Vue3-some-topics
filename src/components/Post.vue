<!-- Child to parents -->
<template>
  <div>
    <h3>Posts Details</h3>

    <div v-if="error">Error Encountered: {{ error.message }}</div>
    <div v-else-if="posts">
      <PostSingle
        v-for="post in posts"
        :post="post"
        :key="post.id"
        @edit-post="updatePost"
      ></PostSingle>
    </div>
    <div v-else>Loading...</div>
  </div>
</template>

<script setup>
import { useFetch } from "../useFetch.js";
import PostSingle from "./PostSingle.vue";

// Implement async functionality logic using Composable in vue 3
const url = `https://jsonplaceholder.typicode.com/posts`;
const { posts, error } = useFetch(url);

const updatePost = (postId, message) => {
  console.log(message);
  posts.value = posts.value.map((post) => {
    if (post.id === postId) return { ...post, title: "Post is updated" };
    return post;
  });
};
</script>
