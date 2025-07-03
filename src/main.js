import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router)

// Désactive Vue DevTools en production
if (import.meta.env.MODE === 'production') {
  app.config.devtools = false
  // Supprime les console.log en production
  console.log = function () {}
}

console.log('Montage de l’app Vue en cours...')

app.mount('#app')
