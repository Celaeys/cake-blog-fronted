<template>
  <Navbar />
  <Banner />
  <router-view class="bg-primary bg-opacity-20" />
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
