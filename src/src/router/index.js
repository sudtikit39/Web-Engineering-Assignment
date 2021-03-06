import Vue from 'vue'
import Router from 'vue-router'
import firebase from 'firebase'

Vue.use(Router)

const routerOptions = [
  {
    path: '/signup',
    component: 'SignUp'
  },
  {
    path: '/Game',
    component: 'Game'
  },
  {
    path: '/signin',
    component: 'SignIn'
  },
  {
    path: '/Home',
    component: 'Home',
    meta: {requiresAuth: true}
  },
  {
    path: '/Members',
    component: 'Members',
    meta: {requiresAuth: true}
  },
  {
    path: '/',
    component: 'Home',
    meta: {requiresAuth: true}
  }
]

const routes = routerOptions.map(route => {
  return {
    path: route.path,
    component: () => import (`@/components/${route.component}.vue`),
    meta: route.meta
  }
})

const router = new Router({
  mode: 'history',
  routes: [
    ...routes, {
      path: '*',
      redirect: '/'
    }
  ]
})

router.beforeEach((to, from, next) => {
  const requiresAuth = to
    .matched
    .some(record => record.meta.requiresAuth)
  const user = firebase
    .auth()
    .currentUser
  if (requiresAuth && !user) {
    next('/signin')
  }
  next()
})

export default router
