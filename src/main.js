import { createSSRApp } from 'vue';
import { createWebHistory } from 'vue-router';
import createRouter from './router.js';
import blogData from './blogData.js';
// TODO: Global loading of blogposts
import App from "./App.vue";
import "./assets/index.css";

const app = createSSRApp(App)

const router = createRouter(createWebHistory())

app.provide('blogData', blogData)
app.use(router)

router.isReady().then(() => {
  app.mount('#app')
})