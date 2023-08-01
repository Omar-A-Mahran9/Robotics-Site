import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import "bootstrap/dist/css/bootstrap.min.css";
import bootstrap from "bootstrap/dist/js/bootstrap.bundle";
library.add(fas);
createApp(App).use(router, bootstrap).mount("#app");
// import "bootstrap/dist/js/bootstrap.bundle";
