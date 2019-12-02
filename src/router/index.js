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
      path: '/datasets',
      component: Layout,
      name: 'Datasets',
      children: [
        {
          path: 'index',
          component: () => import('@/views/datasets/index'),
          name: 'DatasetsIndex',
          meta: { title: '数据集', icon: 'dataset' }
        },
        {
          path: 'new',
          hidden: true,
          component: () => import('@/views/datasets/components/NewDataset'),
          name: 'NewDataset',
          meta: { title: '新增数据集', icon: 'dataset' }
        },
        {
          path: 'detail/:id',
          hidden: true,
          component: () => import('@/views/datasets/components/DatasetDetail'),
          name: 'DatasetDetail',
          meta: { title: '数据集详情', icon: 'dataset' }
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
        },
        {
          path: 'new',
          component: () => import('@/views/train/components/NewTrain'),
          name: 'NewTrain',
          hidden: true,
          meta: { title: '新增训练' }
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
        },
        {
          path: 'new',
          component: () => import('@/views/algo-service/components/NewAlgoService'),
          name: 'NewAlgoService',
          hidden: true,
          meta: { title: '新增在线化服务' }
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
