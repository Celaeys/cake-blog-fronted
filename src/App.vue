<template>
  <Navbar />
  <Banner />
  <router-view class="mb-5"/>
  <Footer />
</template>

<script>
import Navbar from "./components/Navbar.vue";
import Banner from "./components/reusable/Banner.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "App",
  components: {
    Navbar,
    Banner,
    Footer
  },
};
</script>
