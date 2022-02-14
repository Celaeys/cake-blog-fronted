<template>
<div class="py-4">
    <div class="shadow-lg group container rounded-md bg-white  max-w-sm flex justify-center items-center  mx-auto content-div">
        <div>
            <div  class="w-full image-cover rounded-t-md" >
            <div class="p-2 m-4 w-16 h-16 text-center bg-gray-700 rounded-full text-white float-right fd-cl group-hover:opacity-25">
                <span class="text-base tracking-wide  font-bold border-b border-white font-sans">{{ dateDay }}</span>
                <span class="text-xs tracking-wide font-bold uppercase block font-sans">{{ dateMonth }}</span>
            </div>
            </div>
        </div>
        <div class="absolute opacity-0 fd-sh group-hover:opacity-100">
            <span class="text-3xl font-bold text-white tracking-wider leading-relaxed font-sans" v-html="headline"></span> 
            <div class="pt-8 text-center">
                <span v-html="description"></span>
                <simple-button>
                    <router-link :to="{ name: 'BlogDetails', params: { postName: slug }}">Read more!</router-link>
                </simple-button>
            </div>
        </div>
    </div>
</div>
</template>
<script>
import SimpleButton from './SimpleButton.vue'
export default {
  name: 'BlogOverviewElement',
  components: { SimpleButton },
  props: {
        headline: String, 
        slug: String,
        description: String,
        image: String,
        dateDay: Number,
        dateMonth: String,
  },
  computed: {
    btnStyles() {
      return {
        "background-color": this.bgColor,
        height: `${this.height}px`
      };
    }
  }
};
</script>
<style>
  .content-div{
  background-image:url('https://cataas.com/cat');
  background-repeat: no-repeat;
  background-size: cover;
  background-position:center;
}
  .content-div:hover{
    background-image:
    linear-gradient(to right,
     rgba(126, 213, 111, 0.801), hsla(160, 64%, 43%, 0.801) ),
     url('https://images.unsplash.com/photo-1522093007474-d86e9bf7ba6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=80');
    }

    .image-cover  {
      height:260px;
    }
  /*
  -remove the classes below if you have the 'group-hover'property added in your tailwind config file
  -also remove the class from the html template
  */
    .content-div:hover .fd-cl{ 
 opacity: 0.25;
    }
    .content-div:hover .fd-sh{ 
 opacity: 1;
    }
</style>