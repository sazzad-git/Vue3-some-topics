<template>
  <div>
    <!-- <button @click="show = !show">Toggle</button> -->

    <!-- <Transition
      name="fade"
      enter-active-class="animate__animated animate__tada"
      leave-active-class="animate__animated animate__bounce"
    > -->
    <!-- <Transition
      @before-enter="onBeforeEnter"
      @enter="onEnter"
      @after-enter="onAfterEnter"
      @before-leave="onBeforeLeave"
      @leave="onLeave"
      @after-leave="onAfterLeave"
    >
      <div v-if="show" style="text-align: center">Sazzad Web Dev</div>
    </Transition> -->

    <button @click="loadCompA()">Comp A</button>
    <button @click="loadCompB()">Comp B</button>
    <Transition mode="out-in" appear>
      <KeepAlive>
      <component :is="activeComponentName" />
    </KeepAlive>
    </Transition>
    <!-- <Transition mode="in-out">
      <button v-if="docState === 'edit'" @click="docState = 'save'">
        Edit
      </button>
      <button v-else-if="docState === 'save'" @click="docState = 'cancel'">
        Save
      </button>
      <button v-else-if="docState === 'cancel'" @click="docState = 'edit'">
        Cancel
      </button>
    </Transition> -->
  </div>
</template>

<script setup>
import { ref, shallowRef } from "vue";
import CompA from "../CompA.vue";
import CompB from "../CompB.vue";

const show = ref(true);

const docState = ref("edit");

const activeComponentName = shallowRef(CompA);

const loadCompA = () => {
  activeComponentName.value = CompA;
};
const loadCompB = () => {
  activeComponentName.value = CompB;
};

// const onBeforeEnter = (el) => {
//   console.log("on Before enter", el);
// };
// const onEnter = (el, done) => {
//   console.log("on enter", el);
//   const animate = el.animate([{ transform: "scale(0)" }, {}], {
//     duration: 1000,
//   });
//   animate.onfinish = () => {
//     done();
//   };
// };
// const onAfterEnter = (el) => {
//   console.log("on After enter", el);
// };

// const onBeforeLeave = (el) => {
//   console.log("on Before Leave", el);
// };
// const onLeave = (el, done) => {
//   console.log("on Leave", el);
//   const animate = el.animate([{}, { transform: "scale(0)" }], {
//     duration: 1000,
//   });
//   animate.onfinish = () => {
//     done();
//   };
// };
// const onAfterLeave = (el) => {
//   console.log("on After Leave", el);
// };
</script>

<style scoped>
.v-enter-from {
  transform: translateY(30px);
  opacity: 0;
}
.v-leave-to {
  transform: translateY(-30px);
  opacity: 0;
}
.v-enter-active,
.v-leave-active {
  transition: 0.3s;
}
/* .fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
.fade-enter-to,
.fade-leave-from {
  opacity: 1;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 2s ease;
} */
/* .fade-enter-active {
  animation: bounce-in 0.5s;
}
.fade-leave-active {
  animation: bounce-in 0.5s reverse;
} */

/* .bounce-active {
  animation: bounce-in 0.5s;
}
.leave-active {
  animation: bounce-in 0.5s reverse;
} */
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }

  50% {
    transform: scale(1.25);
  }
  100% {
    transform: scale(1);
  }
}
</style>
