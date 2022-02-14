<template>
    <main>
        <div class="w-4/5 mx-auto -mt-28 post-content bg-white sm:p-10 p-5">
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