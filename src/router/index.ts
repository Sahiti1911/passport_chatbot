import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('../pages/HomePage.vue')
    },
    {
      path: '/embassy',
      name: 'Embassy',
      component: () => import('../pages/EmbassyInfo.vue')
    },
    {
      path: '/consular-services',
      name: 'ConsularServices',
      component: () => import('../pages/ConsularServices.vue')
    },
    {
      path: '/visa-services',
      name: 'VisaServices',
      component: () => import('../pages/VisaServices.vue')
    },
    {
      path: '/media',
      name: 'Media',
      component: () => import('../pages/MediaCenter.vue')
    },
    {
      path: '/contact',
      name: 'Contact',
      component: () => import('../pages/ContactUs.vue')
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: () => import('../pages/PageTemplate.vue')
    }
  ]
})

export default router
