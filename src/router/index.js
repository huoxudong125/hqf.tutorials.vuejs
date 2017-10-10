import Vue from 'vue';
import Router from 'vue-router';
import Hello from '@/components/Hello';
import Sidebar from '@/components/Sidebar';
import Blog from '@/components/Blog';
import Form from '@/components/Form';
import BootStrap from '@/components/BootStrap';
import ElementUIDemo from '@/components/ElementUIDemo';
import Counter from '@/components/Counter';
import FormDemo from '@/components/FormDemo';
import Dialog from '@/components/Dialog';

Vue.use(Router);


export default new Router({
  routes: [
    {
      path: '/',
      components: { default: Hello, sidebar: Sidebar },
    },
    {
      path: '/Blog',
      components: { default: Blog, sidebar: Sidebar },
    },
    {
      path: '/Form',
      components: { default: Form, sidebar: Sidebar },
    },
    {
      path: '/BootStrap',
      components: { default: BootStrap, sidebar: Sidebar },
    },
    {
      path: '/ElementUIDemo',
      components: { default: ElementUIDemo, sidebar: Sidebar },
    },
    {
      path: '/Counter',
      components: { default: Counter, sidebar: Sidebar },
    },
    {
      path: '/FormDemo',
      components: { default: FormDemo, sidebar: Sidebar },
    },
    {
      path: '/Dialog',
      components: { default: Dialog, sidebar: Sidebar },
    },

  ],
});
