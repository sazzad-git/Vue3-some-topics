<template>
  <div class="text-center">
    <div id="counter-title" :ref="(el) => updateRef(el)">
      {{ counterData.title }}
    </div>
    <div>
      <button @click.prevent="decreaseCounter()">-</button>
      <span>{{ counterData.counter }}</span>
      <!-- @click.prevent="increaseCounter()" -->
      <button>+</button>
      <div>
        <div>The Counter Value is {{ oddOrEven }}</div>
        <input type="text" v-model="counterData.title" />
      </div>
    </div>
    <div v-for="item in items" :key="item" ref="itemsRef">{{ item }}</div>
  </div>
</template>

<!-- Two way date bainding -->
<script setup>
import {
  computed,
  onBeforeMount,
  onBeforeUnmount,
  onBeforeUpdate,
  onMounted,
  onUnmounted,
  onUpdated,
  reactive,
  ref,
} from "vue";

// without ref
const counterData = reactive({
  counter: 0,
  title: "Counter title",
});

// refs in vue
const counterRef = ref(null);
const items = ref([1, 2, 3, 4, 5]);
const itemsRef = ref([]);

// lifecycleHook
onBeforeMount(() => {
  // console.log(document.getElementById("counter-title"));
  console.log("before mounted");
});

// watchEffect(() => {
//   console.log("Watch Effect");
//   console.log(counterRef.value);
// });

onMounted(() => {
  // console.log(document.getElementById("counter-title"));
  // console.log((counterRef.value.style.color = "red"));
  // console.log(counterRef.value.increaseCounter());
  console.log("On mounted");
});

const updateRef = (el) => {
  console.log("Update ref call");
};

onBeforeUnmount(() => {
  // console.log(document.getElementById("counter-title"));

  console.log("on before unmounted");
});

onUnmounted(() => {
  // console.log(document.getElementById("counter-title"));

  console.log("on unmounted");
});

onBeforeUpdate(() => {
  console.log("Child before update");
});

onUpdated(() => {
  console.log("on Updated");
});

// With ref
// const counter = ref(0);
// const counterTitle = ref("Counter title");

// ref er data .value lage
// const increaseCounter = () => counter.value++;

// const decreaseCounter = () => counter.value--;

// reactive data value lagbe na

const oddOrEven = computed(() => {
  return counterData.counter % 2 === 0 ? "Even" : "Odd";
});

const increaseCounter = () => counterData.counter++;

const decreaseCounter = () => counterData.counter--;

// defineExpose({
//   increaseCounter,
// });
</script>

<!-- Option api -->

<!-- <script>
export default {
  data() {
    return {
      counter: 0,
    };
  },
  methods: {
    increaseCounter() {
      this.counter++;
    },
    decreaseCounter() {
      this.counter--;
    },
  },
};
</script> -->

<!-- Composition api 1st -->
<!-- <script>
import { ref } from "vue";
export default {
  setup() {
    const counter = ref(0);
    function increaseCounter() {
      counter.value++;
    }
    function decreaseCounter() {
      counter.value--;
    }

    return {
      counter,
      increaseCounter,
      decreaseCounter,
    };
  },
};
</script> -->

<!-- Composition api 2st -->
<!-- <script setup>
import { ref } from "vue";
const counter = ref(0);

const increaseCounter = () => counter.value++;

const decreaseCounter = () => counter.value--;
</script> -->

<style scoped>
.text-center {
  text-align: center;
}
</style>
