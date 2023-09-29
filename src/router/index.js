// import { createRouter, createWebHistory } from 'vue-router'
import { createRouter, createWebHashHistory } from 'vue-router'

import mainRouter from '../modules/main/router'

const routes = [
  {
    path: '/',
    ...mainRouter //Como es un objeto, se esparce para agregar las propiedades en este objeto
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

// const router = createRouter({
//   history: createWebHistory(),
//   routes
// })

export default router
