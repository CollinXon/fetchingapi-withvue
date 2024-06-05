import { createApp } from 'vue'
import './style.css'
import router from './router'
import App from './App.vue'
import usePagination from './PaginationComposition'



createApp(App)
.use(router)
.use(usePagination)
.mount('#app')
