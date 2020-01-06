import Vue from 'vue';
import Router from 'vue-router';

import Layout from '@/layout';

Vue.use(Router);

// TODO: 路由结构修改  应该是一个主页面，component为Layout，侧边栏菜单页面均为其子页面

export default new Router({
  routes: [
    {
      path: '/',
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
      path: '/pdl',
      name: 'PDL',
      component: Layout,
      children: [
        {
          path: 'home',
          component: () => import('@/views/home/index'),
          name: 'HomePage',
          meta: { title: '首页', icon: 'dashboard' }
        },
        {
          path: 'datasets',
          name: 'Datasets',
          component: () => import('@/views/datasets/index'),
          redirect: 'datasets/index',
          meta: { title: '数据集', icon: 'datasets' },
          children: [
            {
              path: 'index',
              component: () => import('@/views/datasets/dataset'),
              name: 'DatasetsIndex',
              meta: { title: '数据集列表' }
            },
            {
              path: 'new',
              hidden: true,
              component: () => import('@/views/datasets/components/NewDataset'),
              name: 'NewDataset',
              meta: { title: '新增数据集' }
            },
            {
              path: 'detail/:id',
              hidden: true,
              component: () => import('@/views/datasets/components/DatasetDetail'),
              name: 'DatasetDetail',
              meta: { title: '数据集详情' }
            },
            {
              path: 'detail/:id/detection',
              hidden: true,
              component: () => import('@/views/datasets/tag/detection'),
              name: 'ImageDetection',
              meta: { title: '图片检测' }
            },
            {
              path: 'detail/:id/classify',
              hidden: true,
              component: () => import('@/views/datasets/tag/classify'),
              name: 'ImageClassify',
              meta: { title: '图片分类' }
            },
            {
              path: 'detail/:id/auto-algo-task',
              component: () => import('@/views/auto-algo-task/components/detail'),
              hidden: true,
              name: 'DatasetAutoAlgoTaskDetail',
              meta: { title: '自助算法任务详情' }
            }
          ]
        },
        {
          path: 'train',
          name: 'Train',
          component: () => import('@/views/train/index'),
          redirect: 'train/index',
          meta: { title: '训练', icon: 'train-logo' },
          children: [
            {
              path: 'index',
              component: () => import('@/views/train/train'),
              name: 'TrainIndex',
              meta: { title: '训练列表' }
            },
            {
              path: 'new',
              component: () => import('@/views/train/components/NewTrain'),
              name: 'NewTrain',
              hidden: true,
              meta: { title: '新增训练' }
            },
            {
              path: 'log/:id',
              component: () => import('@/views/train/components/TrainLog'),
              name: 'log',
              hidden: true,
              meta: { title: '训练日志' }
            }
          ]
        },
        {
          path: 'algo-service',
          meta: { title: '在线化服务', icon: 'algo-service' },
          component: () => import('@/views/algo-service/index'),
          redirect: 'algo-service/index',
          children: [
            {
              path: 'index',
              component: () => import('@/views/algo-service/algoService'),
              name: 'AlgoService',
              meta: { title: '在线化服务列表' }
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
          path: 'k8s',
          meta: { title: 'k8s监控台', icon: 'k8s' },
          component: () => import('@/views/k8s/index'),
          redirect: 'k8s/index',
          children: [
            {
              path: 'index',
              component: () => import('@/views/k8s/k8s'),
              name: 'K8sIndex',
              meta: { title: 'k8s监控台' }
            }
          ]
        },
        {
          path: 'auto-algo-task',
          meta: { title: '自助算法任务', icon: 'auto-algo-task' },
          component: () => import('@/views/auto-algo-task/index'),
          redirect: 'auto-algo-task/index',
          children: [
            {
              path: 'index',
              component: () => import('@/views/auto-algo-task/autoAlgoTask'),
              name: 'AutoAlgoTask',
              meta: { title: '自助算法任务列表', icon: 'auto-algo-task' }
            },
            {
              path: 'detail/:id',
              component: () => import('@/views/auto-algo-task/components/detail'),
              name: 'AutoAlgoTaskDetail',
              hidden: true,
              meta: { title: '自助算法任务详情', icon: 'auto-algo-task' }
            }
          ]
        }
      ]
    }
  ]
});
