import { createApp } from 'vue'
import { App } from './App'
import { router } from './config/routes'
import '@svgstore';
import 'vant/lib/index.css';
const app = createApp(App)
app.use(router)
app.mount('#app')
