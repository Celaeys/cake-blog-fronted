<template>
<div id="blog-overview">
  <ul class="w-full lg:flex xl:flex md:flex">
    <li class="lg:w-1/4 xl:w-1/4 md:w-1/2 sm:w-full hover:border-primary hover:bg-secondary-hover hover:bg-opacity-20 p-5" v-for="post in posts" v-bind:key="post.id">
      <BlogOverviewElement :headline="post.headline" :description="post.description" :slug="post.slug" :dateDay="post.dateDay" :dateMonth="post.dateMonth" :image="post.image"/>
    </li>
  </ul>
</div>
</template>
<script>
import axios from 'axios';
import BlogOverviewElement from './reusable/BlogOverviewElement.vue'
export default {
  components: { BlogOverviewElement},
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
      this.posts = response.data;
      for (let i = 0; i < this.posts.length; i++) {
        this.posts[i].headline = this.posts[i].title.rendered;
        this.posts[i].description = this.posts[i].excerpt.rendered;
        console.log(this.posts)
        this.getMediaUrl(this.posts[i].featured_media, i);
        this.getDate(this.posts[i].date, i);
      }
    })
    .catch(e => {
      this.errors.push(e)
    })
  },
  methods: {
    getMediaUrl: function(mediaId, index) {
      axios.get(this.url +`media/` + mediaId)
        .then(response => {
      this.posts[index].image = response.data.source_url;
      })
      .catch(e => {
        this.errors.push(e)
      })
    },
    getDate: function(date, index) {
      const monthNames = ["January", "February", "March", "April", "May", "June","July", "August", "September", "October", "November", "December"];
      let dateObject = new Date(date)
      console.log(dateObject.getDay())
      this.posts[index].dateDay = dateObject.getDay();
      this.posts[index].dateMonth = monthNames[dateObject.getMonth()];
    }
  },
}
</script>