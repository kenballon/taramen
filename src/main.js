import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/css/main.scss'

// auth service
import { taramenAuth } from '@/firebase/config.js'

let app;

taramenAuth.onAuthStateChanged(() => {
    if (!app) {
        app = createApp(App)
            .use(router)
            .mount('#app')
    }
})

