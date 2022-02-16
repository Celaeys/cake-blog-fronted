<template>
  <li class="w-1/3 m-5">
    <router-link :to="{ name: 'BlogDetails', params: { postName: slug }}" class="card">
      <img :src="image" class="w-full" alt="" />
      <div class="bg-text-color-light text-text-color-dark card__overlay">
        <div class="card__header bg-text-color-light">
          <svg class="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>
          <div class="card__header-text">
            <h3 class="text-3xl">
              {{ headline }}
            </h3>
            <div class="card__status flex justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
              <span class="mt-2 ml-2">{{dateDay}} {{dateMonth}}</span>
            </div>
          </div>
        </div>
        <p class="bg-text-color-light card__description text-text-color-dark" v-html="description"></p>
      </div>
    </router-link>      
  </li>
</template>
<script>
export default {
  name: 'BlogOverviewElement',
  props: {
    headline: String, 
    slug: String,
    description: String,
    image: String,
    dateDay: Number,
    dateMonth: String,
  },
  data() {
    return {
      hover: false
    }
  },

};
</script>
<style scoped>
* {
  box-sizing: border-box;
}

.card {
  position: relative;
  display: block;
  height: 100%;  
  border-radius: 40px;
  overflow: hidden;
  text-decoration: none;
}

.card__arc {
  width: 80px;
  height: 80px;
  position: absolute;
  bottom: 100%;
  right: 0;      
  z-index: 1;
}

.card__arc path {
  fill: #DFDAE0;
  d: path("M 40 80 c 22 0 40 -22 40 -40 v 40 Z");
}  

.card__overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1;      
  border-radius: 40px;
  text-align: center;
  transform: translateY(100%);
  transition: .2s ease-in-out;
}

.card:hover .card__overlay {
  transform: translateY(0);
}

.card__header {
  padding: 1em;
  border-radius: 40px 0 0 0;
  transform: translateY(-100%);
  transition: .2s ease-in-out;
}

.card:hover .card__header {
  transform: translateY(0);
}

.card__status {
  font-size: .8em;
}

.card__description {
  padding: 0 1em 1em;
  margin: 0;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  overflow: hidden;
}    
</style>