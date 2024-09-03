<template>
  <div>
    <h2>Watcher Property</h2>

    <div>
      <p>Ask a Yes/No Question?</p>
      <input type="text" v-model="question" />

      <div>Answer: {{ answer }}</div>
      <img :src="responseData.image" alt="" width="200px" height="100px" />
    </div>

    <div>
      x: <input type="text" v-model="x" />
      <br />
      y:<input type="text" v-model="y" />
    </div>

    <!-- Watcher source -->
    <div>Count: <input type="text" v-model="obj.count.value" /></div>
  </div>
</template>

<script setup>
import { reactive, ref, watch } from "vue";

const question = ref("");
const answer = ref("Question generally contain ?");
const responseData = ref("");

watch(question, async (newQuestion, oldQuestion) => {
  if (newQuestion.indexOf("?") > -1) {
    answer.value = "Thinking...";
    responseData.value = "";
    try {
      const res = await fetch("http://yesno.wtf/api");
      const resJson = await res.json();
      responseData.value = resJson;
    } catch (error) {
      answer.value = "Error!. Could not reach the API";
    }
  }
});

const x = ref(0);
const y = ref(0);

// watch(
//   () => x.value + y.value,
//   (sum) => {
//     console.log(`sum values is ${sum}`);
//   }
// );

watch([x, () => y.value], ([newX, newY]) => {
  console.log(`values of x and y is ${newX} nad ${newY}`);
});

// watch(x, (newX) => {
//   console.log(`value of x is ${newX}`);
// });
// watch(y, (newY) => {
//   console.log(`value of y is ${newY}`);
// });

// watch([x, y], ([newX, newY]) => {
//   console.log(`values of x and y is ${newX} nad ${newY}`);
// });

// const obj = reactive({ count: 0, name: "Sazzad Web Dev" });

// watch can't watch a reactive obj
// watch(obj.count, (newCount) => {
//   console.log(`new Count value is ${newCount}`);
// });

// you can use getter method
// watch(
//   () => obj.count,
//   (newCount) => {
//     console.log(`new Count value is ${newCount}`);
//   }
// );

// watch(obj, (newCount) => {
//   console.log(`new Count value is ${newCount.count}`);
// });

// watch(
//   () => obj.count,
//   (newCount, oldCount) => {
//     console.log(`new Count value is ${newCount} old Count ${oldCount}`);
//   }
// );

const obj = reactive({ count: { value: 0, name: "Sazzad" } });

watch(
  () => obj.count,
  (newCount, oldCount) => {
    console.log(
      `new Count value is ${newCount.value} old Count ${oldCount.value}`
    );
  },
  { deep: true }
);
</script>
