//app.js
import { router } from "./router/router.js";
import { iniciarStore } from "./store/store.js";


await iniciarStore();

export const app = document.getElementById("app")

router();
window.addEventListener("hashchange", router)


