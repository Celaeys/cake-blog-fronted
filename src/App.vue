<template>
  <Navbar />
  <Banner />
  <router-view />
</template>

<script>
import Navbar from "./components/Navbar.vue";
import Banner from "./components/reusable/Banner.vue";

export default {
  name: "App",
  components: {
    Navbar,
    Banner,
  },
};
</script>
