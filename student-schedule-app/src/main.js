import { createApp } from 'vue'
import './assets/css/HomeCSS.css'
import App from './App.vue'
import router from './router'

const app = createApp(App)
app.use(router)                // ✅ kích hoạt router
app.mount('#app')