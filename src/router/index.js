import { createRouter, createWebHistory } from 'vue-router'
import Login from '@/components/Login.vue'
import Incidences from '@/views/Incidences.vue'
import GenerateIncidence from '@/components/GenerateIncidence.vue'
import CreateUser from '@/components/CreateUser.vue'

const routes = [
  { path: '/', redirect: '/login' },
  { path: '/login', component: Login },
  { path: '/incidences', component: Incidences },
  { path: '/generate_incidence', component: GenerateIncidence },
  { path: '/create-user', component: CreateUser },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
