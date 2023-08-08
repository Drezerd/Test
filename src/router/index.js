import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/HomePage.vue'
import About from '../pages/About.vue'
import Cards from '../pages/Product.vue'
import Modal from '../pages/Modal.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/cards',
      name: 'cards',
      component: Cards
    },
    {
      path: '/modal/:id',
      name: 'modal',
      component: Modal
    },
  ]
})

export default router