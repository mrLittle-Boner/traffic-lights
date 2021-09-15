import { createApp, h } from "vue";
import App from "./App.vue";

// createApp(App).mount('#app');
const app = createApp(App);
const vm = app.mount('#app');

// createApp({ 
//   render() {
//     return h('div', App)
//   }
// })