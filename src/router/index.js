import VueRouter from 'vue-router'
import BoardList from '@/components/BoardList'
import ShowBoard from '@/components/ShowBoard'
import Members from '@/components/Members'
import SignUp from '@/components/SignUp'
import SignIn from '@/components/SignIn'
import firebase from 'firebase'
import Vue from 'vue'

Vue.use(VueRouter)



const routerOptions = [
  {
    path: '/',
    name: 'BoardList',
    component: 'BoardList',
    meta: {requiresAuth: true}
  },
  {
    path: '/show-board/:id',
    name: 'ShowBoard',
    component: 'ShowBoard',
    meta: {requiresAuth: true}
  },
  {
    path: '/signup',
    name: 'SignUp',
    component: 'SignUp'
  },
  {
    path: '/signin',
    name: 'SignIn',
    component: 'SignIn'
  },
  {
    path: '/Members',
    name: 'Members',
    component: 'Members',
    meta: {requiresAuth: true}
  }
]

const routes = routerOptions.map(route => {
  return {
    name: route.name,
    path: route.path,
    component: () => import (`@/components/${route.component}.vue`),
    meta: route.meta
  }
})

const router = new VueRouter({
  mode: 'history',
  routes: [
    ...routes, {
      name: '*',
      path: '*',
      redirect: '/'
    }
  ]
})

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth)
  const user = firebase.auth().currentUser
  if (requiresAuth && !user) {
    next('/SignIn')
  }
  next()
})


export default router


