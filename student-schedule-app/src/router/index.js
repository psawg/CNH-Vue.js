import { createRouter, createWebHistory } from 'vue-router'

// Import các trang (views)
import Section from '@/views/Section.vue'
import AboutUs from '@/views/AboutUs.vue'
import Login from '@/views/Login.vue'
import Register from '@/views/Register.vue'
import Profile from '@/views/Profile.vue'
import EditProfile from '@/views/EditProfile.vue'
import GTAVI from '@/views/GTAVI.vue'


const routes = [
  { path: '/', name: 'Section', component: Section },
  { path: '/aboutus', name: 'AboutUs', component: AboutUs },
  { path: '/login', name: 'Login', component: Login },
  { path: '/register', name: 'Register', component: Register },
  { path: '/profile', name: 'Profile', component: Profile },
  { path: '/editprofile', name: 'EditProfile', component: EditProfile },
  { path: '/gtaVI', name: 'GTAVI', component: GTAVI },
]


const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
