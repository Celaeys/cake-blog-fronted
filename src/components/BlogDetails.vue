<template>
    <main>
        <div class="w-4/5 mx-auto m post-content">
            <h1 class="text-3xl text-primary text-center"> {{post.title.rendered}} </h1>
            <div v-html="post.excerpt.rendered"></div>
            <rainbow-divider class="w-full"/>
            <div v-html="post.content.rendered"></div>
        </div>
    </main>
</template>
<script>
import axios from 'axios';
import RainbowDivider from './reusable/RainbowDivider.vue'
export default {
  name: 'BlogDetails',
  props: ['postId'],
  components: {
    RainbowDivider
  },
  data() {
    return {
      post: [],
      errors: []
    }
  },

  // Fetches posts when the component is created.
  created() { 
    axios.get(`http://h2952311.stratoserver.net/wp-json/wp/v2/posts/`)
    .then(response => {
      // JSON responses are automatically parsed.
      for (let i = 0; i < response.data.length; i++) {
          if (response.data[i].slug === this.$route.params.postName) {
            this.post = response.data[i];
          }
      }
    })
    .catch(e => {
      this.errors.push(e)
    })
  },
}
</script>
<style scoped>
    main {
        background-image: url("https://www.epicbot.com/forum/uploads/monthly_2021_01/wp2742875.jpg.26afe1988aadffc6e0d6aaf07f9fc539.jpg");
        background-repeat: no-repeat;
        background-size: cover;
    }
    .post-content {
        background-color:rgba(255,255,255,0.5);
        opacity: 1;
    }
</style>