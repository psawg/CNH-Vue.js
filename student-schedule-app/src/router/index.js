import { createRouter, createWebHistory } from 'vue-router'

// Import các trang (views)
import Section from '@/views/Section.vue'


const routes = [
  { path: '/', name: 'Section', component: Section },
]


const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
