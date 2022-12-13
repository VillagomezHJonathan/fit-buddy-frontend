import { createWebHistory, createRouter } from 'vue-router'
import HomePage from './components/pages/HomePage.vue'
import RegisterUser from './components/pages/RegisterUser'
import LoginUser from './components/pages/LoginUser'

const routes = [
  { path: '/', component: HomePage, name: 'HomePage' },
  { path: '/register', component: RegisterUser, name: 'RegisterUser' },
  { path: '/login', component: LoginUser, name: 'LoginUser' }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
