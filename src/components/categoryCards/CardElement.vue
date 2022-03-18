<template>
    <div class="w-full flex">
        <div v-if="alignImage === 'left'" class="bg-secondary-hover h-80 min-h-fit lg:w-1/2 md:w-1/2 sm:w-1/4">
            <img class="object-cover h-80 w-full" src="https://cataas.com/cat"/>
        </div>
        <div class="p-4 h-80 min-h-fit lg:w-1/2 md:w-1/2 sm:w-3/4 text-center text-text-color-dark">
            <h3 class="text-6xl text-primary m-5 font-comforter">{{ title }}</h3>
            <p class="m-5 ali">{{ description }}</p>
            <simple-button class="font-comforter uppercase tracking-widest">
              <router-link class="text-center block py-2 px-4 text-text-color-light hover:bg-secondary-hover hover:bg-opacity-50" :to="routePath">{{ buttonText }}</router-link>
            </simple-button>
        </div>
        <div v-if="alignImage === 'right'" class="bg-secondary-hover h-80 min-h-fit lg:w-1/2 md:w-1/2 sm:w-1/4">
            <img class="object-cover h-80 w-full" src="https://cataas.com/cat"/>
        </div>
    </div>
</template>
<style>

</style>
<script>
import SimpleButton from '../reusable/SimpleButton.vue'
export default {
  name: 'CardElement',
  components: {
    SimpleButton,
  }, 
  props: {
    buttonText: String,
    title: String,
    description: String,
    alignImage: String,
  },
  data() {
    return {
      routePath: ''
    }
  },
  mounted() {
    let routes = this.$router.options.routes;
    for (let i = 0; i < routes.length; i++) {
      if (routes[i].name === this.title) {
        this.routePath = routes[i].path;
      }
    }
  }
}
</script>
