import Vue from 'vue';
import Router from 'vue-router';
import Hello from '@/components/Hello';
import Blog from '@/components/Blog';
import Form from '@/components/Form';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello,
    },
    {
      path: '/Blog',
      name: 'Blog',
      component: Blog,
    },
    {
      path: '/Form',
      name: 'Form',
      component: Form,
    },
  ],
});
