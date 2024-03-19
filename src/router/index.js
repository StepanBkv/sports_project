import { createRouter, createWebHashHistory } from 'vue-router'
import MainPage from '@/pages/MainPage';

const routes = [
  {
    path: '/',

    component:MainPage,
  
  },
  {
    path:'/photo',
    component:() => import('@/pages/PhotoPage'),
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
