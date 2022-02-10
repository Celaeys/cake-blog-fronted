<template>
    <ul class="flex p-3">
        <li class="flex-1 mr-2" v-for="route in routes" :key="route.path" >
            <router-link class="text-center block py-2 px-4 text-text-color-dark hover:bg-secondary-hover hover:bg-opacity-50" :to="route.path">{{ route.name }}</router-link>
        </li>
    </ul>
</template>

<script>
export default {
  name: 'Navigation',
  data() {
    return {
      routes: this.$router.options.routes
    };
  }
}
</script>
