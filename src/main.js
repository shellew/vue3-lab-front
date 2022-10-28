// import Vue from "vue";
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
// import store from "./store";
import "./assets/main.css";
// import { Vue } from "@vueuse/shared/node_modules/vue-demi";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";

const app = createApp(App);
// const store = createStore;

app.use(router);
app.use(ElementPlus);
// app.use(store);
app.mount("#app");

// new Vue({
//   router,
//   render: h => h(App),
//   store,
// }).$mount("#app");
