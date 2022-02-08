<template>
  <Navbar />
  <HelloWorld msg="Welcome to Your Vue.js App" />
</template>

<script>
import HelloWorld from "./components/Blog.vue";
import Navbar from "./components/Navbar.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
    Navbar,
  },
};
</script>
