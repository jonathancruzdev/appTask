import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CompletadasView from '../views/CompletadasView'
import PendientesView from '../views/PendientesView'
import NuevaView from '../views/NuevaView'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/completadas',
    name: 'completadas',
    component: CompletadasView
  },
  {
    path: '/pendientes',
    name: 'pendientes',
    component: PendientesView
  },
  {
    path: '/nueva',
    name: 'nueva',
    component: NuevaView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
