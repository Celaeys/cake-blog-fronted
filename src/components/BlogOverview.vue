<template>
<div id="blog-overview">
  <ul id="array-rendering">
    <li class="lg:w-1/4 xl:w-1/4 hover:border-primary hover:bg-secondary-hover hover:bg-opacity-20" v-for="post in posts" v-bind:key=post.id>
      <div class="link-image">
        <img class="m-5 w-90 h-1" src="https://cataas.com/cat"/>
      </div>
      <div class="link-text">
        <h3 v-html="post.title.rendered" class="link-headline"></h3>
        <span class="link-text" v-html="post.content.rendered"></span>
        <span class="link-text">{{ post.date }}</span>
        <simple-button>{{ post.title.rendered }}</simple-button>
      </div>
    </li>
  </ul>
</div>
</template>


<script>
import axios from 'axios';
import moment from 'moment';
import SimpleButton from './reusable/SimpleButton.vue';
export default {
  components: { SimpleButton },
  name: 'BlogOverview',
  data() {
    return {
      posts: [],
      errors: []
    }
  },

  // Fetches posts when the component is created.
  created() { 
    axios.get(`http://h2952311.stratoserver.net/wp-json/wp/v2/posts`)
    .then(response => {
      // JSON responses are automatically parsed.
      this.posts = response.data
      console.log(response.data)
    })
    .catch(e => {
      this.errors.push(e)
    })
  },
  computed: {
    formatDate(value) {
      if (value) {
        return moment(String(value)).format('MM/DD/YYYY hh:mm')
      }
      return value;
    }
  },
}
</script>