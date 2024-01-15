import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../pages/HomePage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage,
      children: [
        {
          path: 'posts',
          name: 'posts',
          component: () => import('../pages/PostsPage.vue')
        },
        {
          path: 'posts/:id',
          name: 'post-id',
          component: () => import('../pages/PostPage.vue')
        }
      ]
    }
  ]
})

export default router
