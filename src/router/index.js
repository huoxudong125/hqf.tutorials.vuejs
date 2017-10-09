import Vue from 'vue';
import Router from 'vue-router';
import Hello from '@/components/Hello';
import Blog from '@/components/Blog';
import Form from '@/components/Form';
import BootStrap from '@/components/BootStrap';
import ElementUIDemo from '@/components/ElementUIDemo';
import Counter from '@/components/Counter';
import FormDemo from '@/components/FormDemo';

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
    {
      path: '/BootStrap',
      name: 'BootStrap',
      component: BootStrap,
    },
    {
      path: '/ElementUIDemo',
      name: 'ElementUIDemo',
      component: ElementUIDemo,
    },
    {
      path: '/Counter',
      name: 'Counter',
      component: Counter,
    },
    {
      path: '/FormDemo',
      name: 'FormDemo',
      component: FormDemo,
    },
  ],
});
