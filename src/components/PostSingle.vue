<template>
  <div>Id: {{ post.id }}</div>
  <div>Title: {{ post.title }}</div>
  <!-- <div>
    <button @click.prevent="$emit('editPost', post.id, 'Hello World')">
      Edit Post
    </button>
  </div> -->
  <div>
    <button @click.prevent="updatePost">Update Post</button>
  </div>

  <div><input type="text" v-focus:foo.foo.bar="value" /></div>
  <hr />
</template>

<script setup>
const value = "Sazzad Web Dev";

const props = defineProps({
  post: {
    type: Object,
    required: true,
  },
});

// const emit = defineEmits(["editPost"]);
const emit = defineEmits({
  editPost(postId) {
    if (postId && typeof postId === "number") {
      return true;
    }
    return false;
  },
});

const updatePost = () => {
  emit("editPost", props.post.id, "Hello World");
};
</script>
