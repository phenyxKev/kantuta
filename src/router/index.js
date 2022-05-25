import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/info',
    name: 'info',
    // route level code-splitting
    // this generates a separate chunk (info.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "info" */ '../views/Info.vue')
  },
  {
    path: '/explore',
    name: 'explore',
    component: () => import(/* webpackChunkName: "explore" */ '../views/Explore.vue')
  },
  {
    path: '/team',
    name: 'team',
    component: () => import(/* webpackChunkName: "team" */ '../views/Team.vue')
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import(/* webpackChunkName: "contact" */ '../views/Contact.vue')
  },
  {
    path: '/premium',
    name: 'premium',
    component: () => import(/* webpackChunkName: "premium" */ '../views/Premium.vue')
  },
  {
    path: '/store',
    name: 'store',
    component: () => import(/* webpackChunkName: "store" */ '../views/Store.vue')
  },
  {
    path: '/products/:cat',
    name: 'products',
    component: () => import(/* webpackChunkName: "products" */ '../views/Products.vue')
  },
  {
    path: '/product/:id',
    name: 'product',
    component: () => import(/* webpackChunkName: "product" */ '../views/Product.vue')
  },
  {
    path: '/cart',
    name: 'cart',
    component: () => import(/* webpackChunkName: "cart" */ '../views/Cart.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 }
  }
})

export default router