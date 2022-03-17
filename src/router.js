// router.js
import { createRouter } from 'vue-router'
import Home from './components/Home.vue'
import BlogOverview from './components/blog/BlogOverview.vue'
import BlogDetails from './components/blog/BlogDetails.vue'

const routes = [
    { 
      path: '/',
      component: Home,
      name:'Home'
    },
    { 
      path: '/blog',
      component: BlogOverview,
      name:'Blog'
    },
    { 
      path: '/blog/:postName',
      component: BlogDetails,
      name:'BlogDetails',
      props: true,
    },
    { 
      path: '/recipes',
      component: BlogOverview,
      name:'Recipes'
    },
    { 
      path: '/recipes/:postName',
      component: BlogDetails,
      name:'RecipeDetails',
      props: true,
    },
]

export default function (history) {
  return createRouter({
    history,
    routes
  })
}