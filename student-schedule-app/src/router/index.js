import { createRouter, createWebHistory } from 'vue-router'

// Import các trang (views)
import Section from '@/views/Section.vue'
import TestFirebase from '@/views/TestFirebase.vue'
import AboutUs from '@/views/AboutUs.vue'
const routes = [
  { path: '/', name: 'Section', component: Section },
  { path: '/test', component: TestFirebase },
  { path: '/aboutus', name: 'AboutUs', component: AboutUs },
]


const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
