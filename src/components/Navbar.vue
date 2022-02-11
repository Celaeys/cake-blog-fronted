<template>
    <ul class="flex p-3">
        <li class="flex-1 mr-2" v-for="route in routes" :key="route.path" >
            <router-link class="text-center block py-2 px-4 text-text-color-dark hover:bg-primary hover:text-text-color-light rounded" :to="route.path">{{ route.name }}</router-link>
        </li>
    </ul>
</template>

<script>
export default {
  name: 'Navigation',
  data() {
    return {
      routes: []
    };
  },
  mounted() {
    let routes = this.$router.options.routes
    for (let i = 0; i < routes.length; i++) {
      if (routes[i].name === 'RecipeDetails' || routes[i].name === 'BlogDetails') {
        routes.splice(i, 1);
      }
    }
    this.routes = routes
  }
}
</script>
