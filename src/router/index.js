import Vue from 'vue';
import Router from 'vue-router';

import Layout from '@/layout';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Root',
      hidden: true,
      redirect: '/login'
    },
    {
      path: '/login',
      name: 'LoginPage',
      hidden: true,
      component: () => import('@/views/login/index')
    },
    {
      path: '/dashboard',
      component: Layout,
      redirect: '/datasets',
      children: [
        {
          path: '/datasets',
          component: () => import('@/views/datasets/index'),
          name: 'Datasets',
          meta: { title: '数据集', icon: 'dataset' }
        }
      ]
    },
    {
      path: '/train',
      component: Layout,
      children: [
        {
          path: 'index',
          component: () => import('@/views/train/index'),
          name: 'Train',
          meta: { title: '训练', icon: 'run' }
        }
      ]
    },
    {
      path: '/algo-service',
      component: Layout,
      children: [
        {
          path: 'index',
          component: () => import('@/views/algo-service/index'),
          name: 'AlgoService',
          meta: { title: '在线化服务', icon: 'earth' }
        }
      ]
    },
    {
      path: '/resources',
      component: Layout,
      children: [
        {
          path: 'index',
          component: () => import('@/views/resources/index'),
          name: 'Resources',
          meta: { title: '容器', icon: 'Resources' }
        }
      ]
    },
    {
      path: '/auto-algo-task',
      component: Layout,
      children: [
        {
          path: 'index',
          component: () => import('@/views/auto-algo-task/index'),
          name: 'AutoAlgoTask',
          meta: { title: '自助算法任务', icon: 'tasks' }
        }
      ]
    }
  ]
});
