<template>
  <!-- <div>Hello world</div> -->
  <div>
    <!-- <counter v-if="showCounter"></counter> -->
    <!-- <button @click.prevent="showCounter = !showCounter">Toggle Counter</button> -->
    <!-- <FromInput /> -->
    <!-- <EventHandling /> -->
    <!-- <ListRendering /> -->
    <!-- <ConditionalComponent /> -->
    <!-- <class-component class="fo bar" /> -->
    <!-- <StyleComponent /> -->
    <!-- <TemplateSyntax /> -->
    <!-- <computed-component /> -->
    <!-- <WatchComponent /> -->
    <!-- <WatchEffectComponent /> -->
    <!-- <SinglePost :postTitle="postTitle" :id="postId" /> -->
    <!-- <SinglePost :title="postDetails.title" :id="postDetails.id" /> -->
    <!-- <SinglePost v-bind="postDetails" /> -->
    <!-- <SinglePost :postDetails="postDetails" /> -->
    <!-- <div>Parent: {{ postDetails.title }}</div> -->
    <!-- <SinglePost2
      :name="'Leela Web Dev'"
      :postDetails="postDetails"
      message="success"
      :updateTitle="updateTitle"
      :person="person"
    />
    <SinglePost2 message="warningsdsd" :person="person" />

    <div>Parent: {{ postDetails.title }}</div> -->

    <!-- <PostSingle /> -->
    <!-- <Post /> -->
    <!-- <CustomInput :searchText="searchText" @updateText="searchText = $event" /> -->
    <!-- <CustomInput v-model="searchText" /> -->
    <!-- <CustomInput v-model:title="searchText" /> -->
    <!-- <CustomInput v-model:title.no-hyphens="searchText" /> -->
    <!-- <CustomInput
      :modelValue="searchText"
      @update:modelValue="(newValue) => (searchText = newValue)"
    /> -->
    <!-- <UserName v-model:firstName="firstName" v-model:lastName="lastName" /> -->
    <!-- <div>Parent: {{ searchText }}</div> -->
    <!-- <MyButton class="large" style="color: red" @click="onParentClick" /> -->
    <!-- <BaseButton class="large" style="color: red" @click="onParentClick" /> -->
    <!-- <SlotComponent>
      <span style="color: red">Click</span>
      <span>Here - {{ searchText }}</span>
    </SlotComponent> -->
    <!-- <SlotComponent> -->
    <!-- <template v-slot:header> same as #header -->
    <!-- <template #header="headerProps">
        <h1>Header Content</h1>
        <div>{{ headerProps.message }}</div>
      </template>
      <template #default="defaultProps">
        <div>Main Content</div>
        <div>Main second part</div>
        <div>{{ defaultProps.message }}</div>
      </template>

      <template #footer="FooterProps">
        <div>Footer Content</div>
        <div>{{ FooterProps.message }}</div>
        <div>{{ FooterProps.count }}</div>
      </template>
    </SlotComponent> -->
    <!-- <SlotComponent v-slot="slotProps">
      <div>Hello world</div>
      <div>{{ slotProps.text }}</div>
    </SlotComponent> -->
    <!-- <PostsComponent v-if="showPosts"></PostsComponent>

    <div>
      <button @click.prevent="showPosts = !showPosts">Click Here</button>
    </div> -->

    <!-- <MouseTracker></MouseTracker> -->
    <!-- <Post/> -->
    <!-- <Post2 /> -->
    <!-- <TransitionComponent /> -->
    <!-- <TransitionList /> -->
    <TeleportComponent />
  </div>
</template>

<script setup>
import {
  defineAsyncComponent,
  onBeforeUpdate,
  onUpdated,
  provide,
  ref,
} from "vue";
import LoadingComponent from "./components/LoadingComponent.vue";
import Person from "./Person";
import TeleportComponent from "./TeleportComponent.vue";

// DefineAsyncComponent, conditional loading
// const PostsComponent = defineAsyncComponent(() =>import("./components/Post/Post.vue"));
const PostsComponent = defineAsyncComponent({
  loader: () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(import("./components/Post/Post.vue"));
      }, 2000);
    });
  },
  loadingComponent: LoadingComponent,
});

const message =
  "Hi Sazzad Web Dev Provide/Inject as doctor vue from leela web dev";

const searchText = ref("Hello Sazzad Web Dev");

function updateSearchText() {
  searchText.value = "Updated Value from parent";
}

provide("message", { searchText, updateSearchText });

const showCounter = ref(true);
const postTitle = ref("Sazzad Web Dev");
const postId = ref(42);

// DefineAsyncComponent, conditional loading
const showPosts = ref(false);

const firstName = ref("Sazzadur");
const lastName = ref("Rahman");

const postDetails = ref({
  title: "Sazzad Web Dev",
  id: 42,
});

const updateTitle = () => {
  postDetails.value.title = "changer value from parent";
};

const onParentClick = () => {
  console.log("on parent click");
};

const person = new Person("Sazzad", 30);

onBeforeUpdate(() => {
  console.log("on before update");
});

onUpdated(() => {
  console.log("on Updated");
});
</script>
