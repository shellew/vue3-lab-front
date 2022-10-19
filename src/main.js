// import Vue from "vue";
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
// import store from "@/store";
import "./assets/main.css";
// import { Vue } from "@vueuse/shared/node_modules/vue-demi";


const app = createApp(App);

app.use(router);
// app.use(ElementPlus);
app.mount("#app");

// new Vue({
//   router,
//   render: h => h(App),
//   store
// }).$mount("#app");
