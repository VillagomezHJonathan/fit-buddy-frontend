import { createWebHistory, createRouter } from 'vue-router'
import HomePage from './components/pages/HomePage.vue'
import RegisterUser from './components/pages/RegisterUser'

const routes = [
  { path: '/', component: HomePage, name: 'HomePage' },
  { path: '/register', component: RegisterUser, name: 'RegisterUser' }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
