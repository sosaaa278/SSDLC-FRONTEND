import { createRouter, createWebHistory } from 'vue-router'
import Login from '@/components/Login.vue'
import Incidences from '@/views/Incidences.vue'
import stateForm from '@/views/stateForm.vue'
import GenerateIncidence from '@/components/GenerateIncidence.vue'
import CreateUser from '@/components/CreateUser.vue'
import MainPage from '@/views/MainPage.vue'


const routes = [
  { path: '/', redirect: '/login' },
  { path: '/login', component: Login },
  { path: '/incidences', component: Incidences },
  { path: '/generate_incidence', component: GenerateIncidence },
  { path: '/create-user', component: CreateUser },
  { path: '/stateForm', component: stateForm },// nuevo apartado
  { path: '/mainpage', component: MainPage } // nuevo apartado
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
