<template>
    <footer class="text-center text-text-color-dark bg-text-color-light">
        <!-- TODO: make icon template -->
    <div class="w-full px-6 pt-6">
        <div class="flex justify-center mb-6">
            <a v-for="component in components" v-bind:key="component" :href="tiktok" type="button" class="hover:bg-primary hover:text-text-color-light rounded-full p-2 border-2 border-white text-text-color-text-text-color-dark leading-normal uppercase hover:bg-black focus:outline-none focus:ring-0 transition duration-150 ease-in-out w-9 h-9 m-1">
                <component v-bind:is="component"/>
            </a>
        </div>
  </div>

  <div class="text-center text-text-color-light p-4 bg-primary">
    © 2021 Copyright:
    <a class="text-text-color-light" href="https://tailwind-elements.com/">Tailwind Elements</a>
  </div>
</footer>
</template>

<script>
import FacebookSVG from './reusable/svg/FacebookSVG.vue'
import InstagramSVG from './reusable/svg/InstagramSVG.vue'
import TiktokSVG from './reusable/svg/TiktokSVG.vue'
import TwitterSVG from './reusable/svg/TwitterSVG.vue'

export default {
  name: 'BlogOverview',
  data() {
    return {
        facebook: '',
        instagram: '',
        twitter: '',
        tiktok: '',
        components:[
            FacebookSVG,
            InstagramSVG,
            TiktokSVG,
            TwitterSVG
        ]
    }
  },
}
</script>