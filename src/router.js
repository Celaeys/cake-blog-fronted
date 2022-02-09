// router.js
import { createRouter } from 'vue-router'
import Home from './components/Home.vue'
import BlogOverview from './components/BlogOverview.vue'

const routes = [
    { path: '/', component: Home, name:'Home' },
    { path: '/blog', component: BlogOverview, name:'Blog' },
]

export default function (history) {
  return createRouter({
    history,
    routes
  })
}