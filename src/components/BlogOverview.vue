<template>
<div id="blog-overview">
  <ul class="w-full lg:flex xl:flex md:flex mb-7">
    <li class="lg:w-1/4 xl:w-1/4 md:w-1/2 sm:w-full hover:border-primary hover:bg-secondary-hover hover:bg-opacity-20 p-5" v-for="post in posts" v-bind:key="post.id">
      <div class="link-image">
        <img class="m-5 w-90 h-1" :src="getMediaUrl(post.featured_media)" alt="MEEEH"/>
      </div>
      <div>
        <h3 v-html="post.title.rendered" class="link-headline"></h3>
        <span class="blog-overview-link-text" v-html="post.excerpt.rendered"></span>
        <simple-button>
          <router-link :to="{ name: 'BlogDetails', params: { postName: post.slug }}">Read more!</router-link>
        </simple-button>
      </div>
    </li>
  </ul>
</div>
</template>


<script>
import axios from 'axios';
import SimpleButton from './reusable/SimpleButton.vue';
export default {
  components: { SimpleButton },
  name: 'BlogOverview',
  data() {
    return {
      posts: [],
      errors: [], 
      url: 'http://h2952311.stratoserver.net/wp-json/wp/v2/'
    }
  },
  created() { 
    axios.get(this.url +`posts?category=`+ this.$route.name.toLowerCase())
    .then(response => {
      this.posts = response.data
      console.log(response.data)
      console.log(this.$route.name.toLowerCase())
    })
    .catch(e => {
      this.errors.push(e)
    })
  },
  methods: {
    getMediaUrl: function(mediaId) {
      axios.get(this.url +`media/` + mediaId)
        .then(response => {
      console.log('HI', response.data.source_url)
      return response.data.source_url;
    })
    .catch(e => {
      this.errors.push(e)
    })
    }
  },
}
</script>