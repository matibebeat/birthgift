import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/admin',
      name: 'admin',
        component: () => import('../views/AdminView.vue'),
      meta: { requiresAuth: true }

    },
    {
      path:'/article/:id',
        name: 'article',
        component: () => import('../views/ArticleView.vue')
    },
    {
      path:'/login',
      name:'login',
      component : () => import('../views/LoginView.vue')
    },
    {
      path:'/success',
        name: 'success',
        component: () => import('../views/SuccessView.vue')
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'not-found',
        component: () => import('../views/NotFoundView.vue')
    },
    {
      path:'/messages',
        name:'messages',
        component: () => import('../views/MessagesView.vue'),
    },
    {
      path:'/redirect/:id',
     redirect: (to) => {
       window.location.href.replace(to.params.id);
       return '/redirecting';
     }

    }
  ]
})


router.beforeEach((to,from,next) =>{
 if(to.meta.requiresAuth){
   const token = localStorage.getItem('token');
   if(token){
     next();
   }else{
  next('/login');
   }
 }else{
   next();
 }
})



export default router
