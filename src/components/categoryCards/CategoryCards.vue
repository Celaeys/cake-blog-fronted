<template>
    <div v-for="category in categories" :key="category.title">
      <card-element :title="category.title" :buttonText="category.buttonText" :description="category.description" :alignImage="category.alignImage"/>
    </div>
</template>
<style>

</style>
<script>
import { ref } from 'vue';
import CardElement from './CardElement.vue'
export default {
  name: 'CategoryCards',
  components: {
    CardElement,
  },
  setup() {
    const categories = ref([
            { title: 'Blog', description: 'Balinese american shorthair american bobtail malkin', buttonText: 'Read more', alignImage: 'right'},
            { title: 'Recipes', description: 'Donskoy devonshire rex birman tom', buttonText: 'Browse recipes', alignImage: 'left'},
            { title: 'Shop', description: 'Coming Soon', buttonText: 'Find your Stuff', alignImage: 'right'},
        ]);
    return {
      categories
    };
  }
}
</script>
