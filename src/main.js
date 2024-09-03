import { createApp } from "vue";
import App from "./App.vue";
import ClassComponent from "./components/ClassComponent.vue";
import ComputedComponent from "./components/ComputedComponent.vue";
import ConditionalComponent from "./components/ConditionalComponent.vue";
import Counter from "./components/Counter.vue";
import EventHandling from "./components/EventHandling.vue";
import FromInput from "./components/FromInput.vue";
import ListRendering from "./components/ListRendering.vue";
import StyleComponent from "./components/StyleComponent.vue";
import TemplateSyntax from "./components/TemplateSyntax.vue";
import WatchComponent from "./components/WatchComponent.vue";
import WatchEffectComponent from "./components/WatchEffectComponent.vue";

const app = createApp(App);

app.directive("focus", {
  mounted(el, binding, vNode, prevVNode) {
    console.log(binding);
    el.style.borderColor = "yellow";
  },
});

app.provide("main", "Main value from app");

app.component("Counter", Counter);
app.component("ClassComponent", ClassComponent);
app.component("ConditionalComponent", ConditionalComponent);
app.component("EventHandling", EventHandling);
app.component("ListRendering", ListRendering);
app.component("TemplateSyntax", TemplateSyntax);
app.component("StyleComponent", StyleComponent);
app.component("ComputedComponent", ComputedComponent);
app.component("FromInput", FromInput);
app.component("WatchComponent", WatchComponent);
app.component("WatchEffectComponent", WatchEffectComponent);

app.mount("#app");
