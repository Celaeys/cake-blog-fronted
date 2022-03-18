<template>
    <main>
        <div class="w-4/5 mx-auto post-content bg-white sm:p-10 p-5">
            <h1 class="text-3xl text-primary text-center"> {{post.title.rendered}} </h1>
            <div v-html="post.excerpt.rendered" class="renderedSummary"></div>
            <rainbow-divider class="w-full"/>
            <div v-html="post.content.rendered" class="flex flex-col renderedPost"></div>
        </div>
    </main>
</template>
<script>
import axios from 'axios';
import RainbowDivider from '../reusable/RainbowDivider.vue'
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
    background: rgba(223, 218, 224);
  }
</style>
<style>
  .renderedSummary {
    padding: 0 1em;
    margin: 1em;
  }
  .post-content {
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
  }
  .renderedPost > p {
    padding: 1em;
    margin: 1em;
  }
  .renderedPost > .wp-block-image {
    width: 70vw;
    height: auto;
    position:relative;
    background:#DFDAE0;
    overflow:hidden;
    margin:30px auto;
    padding:20px;
    border-radius:0 0 0 30px/45px;
    color: #4E2C46;
    text-align: center;
  }

  .renderedPost > .wp-block-image::before {
    content:"";
    display:block;
    position:absolute;
    width:20px;
    height:25px;
    background:#DFDAE0;
    box-shadow:
      3px -2px 10px rgba(0,0,0,0.2),
      inset 15px -15px 15px rgba(0,0,0,0.3);
    left:0;
    bottom:0;
    z-index:2;
    transform:skewX(25deg);
  }

  .renderedPost > .wp-block-image::after {
    content:"";
    display:block;
    position:absolute;
    width:75%;
    height:20px; 
    border-top:3px solid #4E2C46;
    border-radius: 50% ;
    bottom:0px;
    left:10%;
  }

  .renderedPost > .wp-block-image > img {
    width: 70vw;
    margin-bottom: 1em;
  }

  .renderedPost > ul {
    margin: 0 10%;
  }

  .renderedPost > ul > li {
    margin: 2% 0;
    padding: 2%;
    background: #4E2C46;
    color: #DFDAE0;
  }
</style>