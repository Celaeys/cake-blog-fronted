<template>
    <div class="max-w-sm w-full max-w-full flex">
        <div class="p-4 h-80 min-h-fit lg:w-1/2 md:w-1/2 text-center text-text-color-dark">
            <h3>CRYSTALS</h3>
            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,</p>
            <p>Lorem</p>
            <SimpleButton />
        </div>
        <div class="bg-secondary-hover h-80 min-h-fit lg:w-1/2 md:w-1/2">
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
  }
}
</script>
