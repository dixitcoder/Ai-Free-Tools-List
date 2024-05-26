// auth firebase


import { createRouter, createWebHistory } from "vue-router";
import {auth} from '@/services/firebaseauth'
// Import your Vue components
import Login from '@/pages/login.vue';
import login1 from './../pages/login1.vue'
import Home from '/home/dixitcoder/Desktop/DixitCoder_Project/tools-ai/src/pages/home.vue'
import mongo from '../pages/datamongo.vue'
import AiToolsList from '@/components/AiToolsList.vue'
import html from '@/components/pdf-view.vue'
import taskaiinfo from '@/pages/taskaiinfo.vue'
import vuejs from '/home/dixitcoder/Desktop/DixitCoder_Project/tools-ai/src/pages/tutorial/vuejs-pdf.vue'
import javascript from '/home/dixitcoder/Desktop/DixitCoder_Project/tools-ai/src/pages/tutorial/js-basic.vue'
import python from '/home/dixitcoder/Desktop/DixitCoder_Project/tools-ai/src/pages/tutorial/python-Basics.vue'
import React from '/home/dixitcoder/Desktop/DixitCoder_Project/tools-ai/src/pages/tutorial/React.vue'
import PHP from '/home/dixitcoder/Desktop/DixitCoder_Project/tools-ai/src/pages/tutorial/php.vue'
import java from '/home/dixitcoder/Desktop/DixitCoder_Project/tools-ai/src/pages/tutorial/java.vue'
import c from '/home/dixitcoder/Desktop/DixitCoder_Project/tools-ai/src/pages/tutorial/c++.vue'
import Ruby from '/home/dixitcoder/Desktop/DixitCoder_Project/tools-ai/src/pages/tutorial/ruby.vue'
// Import Vue Router

// firebase auth



// admin component
import Dashboard from '/home/dixitcoder/Desktop/DixitCoder_Project/tools-ai/src/components/dashboard.vue'
import tableAdmin from '@/components/pages/table-admin.vue';

// 404 page error path

import NotFound from '@/components/404.vue'


const router = createRouter({
  history: createWebHistory(),
routes :  [
  { path: '/', redirect: '/home' },
  { path: '/home', name: 'Home', component: Home },
  // Add more routes as needed
  { path: '/login', name: 'Login', component:Login },
  {path:'/registeraitool',name:'MongoData',component: mongo},
  {path:'/AiToolsList',name:'AiToolsList',component: AiToolsList},
  {path:'/aiInfo/:_id',name:'ai-info',component: taskaiinfo},
  {path:'/html',name:'HTML-Course ',component: html},
  {path:'/Vue',name:'Vue-Course ',component: vuejs},
  {path:'/javascript',name:'JavaScript Basics',component: javascript},
  {path:'/python',name:'Python Basics',component: python},
  {path:'/React',name:'React Basics',component: React},
  {path:'/php',name:'PHP Basics',component: PHP},
  {path:'/java',name:'Java Basics',component: java},
  {path:'/c++',name:'c++ Basics',component: c},
  {path:'/ruby',name:'Ruby Basics',component: Ruby},
  {path:'/login1',name:'Ruby Basics',component: login1},



  // admin component
  {path:'/dashboard',name:'Dashboard',component: Dashboard, meta: {
    requiresAuth: true, // Add this meta field to indicate authentication is required
  },},
  {path:'/admin-table',name:'admin-table',component: tableAdmin},

  // 404 page error
  { path: '/:pathMatch(.*)*', component: NotFound }

]
})

router.beforeEach(async (to, from, next) => {
  const requiresAuth = to.matched.some((record) => record.meta.requiresAuth);

  // Wait for the authentication state to be resolved
  await new Promise(resolve => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      unsubscribe(); // Unsubscribe to avoid multiple calls
      resolve(user);
    });
  });

  const user = auth.currentUser;

  if (requiresAuth && !user) {
    // User is not authenticated, and the route requires authentication
    next('/login'); // Redirect to the login page
  } else {
    next(); // Continue navigation
  }
});

export default router;
