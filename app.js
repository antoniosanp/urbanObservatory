//app.js
import { iniciarStore } from "./store/store.js";
import { store } from "./store/store.js";

await iniciarStore();

console.log(store)