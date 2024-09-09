import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('@/_pages/home.vue')
  },

  {
    path: '/:catchAll(.*)*',
    component: () => import('@/_pages/404.vue')
  }
]


const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

/* router.beforeResolve((to, from, next) => {
  //
}) */

export { router }