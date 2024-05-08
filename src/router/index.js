// Import your Vue components
import Login from '@/pages/login.vue';
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


// admin component
import tableAdmin from '@/components/pages/table-admin.vue';

import { createRouter, createWebHistory } from 'vue-router'

// Define your routes
const routes = [
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


  // admin component
  {path:'/admin-table',name:'admin-table',component: tableAdmin},


]


// Create the router instance
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
