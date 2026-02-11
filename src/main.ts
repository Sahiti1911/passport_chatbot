import './assets/main.css'
import '@fortawesome/fontawesome-free/js/all.min.js'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

createApp(App)
  .use(router)
  .mount('#app')
