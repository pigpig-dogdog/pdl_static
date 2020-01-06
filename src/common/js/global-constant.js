const algoTypes = [
  {
    label: '分类',
    value: 'CLASSIFICATION',
    tagUrl: '/classify'
  },
  {
    label: '检测',
    value: 'DETECTION',
    tagUrl: '/detection'
  }
];

const frameworkSearch = [
  'TENSORFLOW',
  'KERAS',
  'PYTORCH'
];

const framework = [
  'TENSORFLOW_1_14_0',
  'TENSORFLOW_1_15_0',
  'TENSORFLOW_2_0_0',
  'KERAS_2_3_1',
  'PYTORCH_1_3_1'
];
const LANGUAGE = [
  'PYTHON_2_7',
  'PYTHON_3_5',
  'PYTHON_3_6',
  'PYTHON_3_7'
];
const trainStatus = [
  {
    label: '等待',
    value: 'WAITING',
    tagType: 'warning',
    resultBtnType: 'info',
    resultText: '暂无结果'
  },
  {
    label: '运行中',
    value: 'RUNNING',
    tagType: '',
    resultBtnType: 'info',
    resultText: '暂无结果'
  },
  {
    label: '成功',
    value: 'SUCCESS',
    tagType: 'success',
    resultBtnType: 'success',
    resultText: '结果下载'
  },
  {
    label: '失败',
    value: 'FAILED',
    tagType: 'danger',
    resultBtnType: 'success',
    resultText: '结果下载'
  }
];

const AutoAlgoTaskStatus = [
  {
    label: '运行中',
    value: 'RUNNING',
    tagType: '',
    resultBtnType: 'info',
    resultText: '暂无结果'
  },
  {
    label: '成功',
    value: 'SUCCESS',
    tagType: 'success',
    resultBtnType: 'success',
    resultText: '结果下载'
  },
  {
    label: '失败',
    value: 'FAILED',
    tagType: 'danger',
    resultBtnType: 'success',
    resultText: '结果下载'
  }
];

const algoServiceStatus = [
  {
    label: '等待',
    value: 'WAITING',
    tagType: 'warning'
  },
  {
    label: '运行中',
    value: 'SERVING',
    tagType: '',
    buttonType: 'danger',
    statusText: '停止服务',
    api: 'stop'
  },
  {
    label: '失败',
    value: 'EXITED',
    tagType: 'danger',
    buttonType: 'primary',
    statusText: '启动服务',
    api: 'start'
  }
];

// const AlgoService = {
//   Waiting: {
//     label: '等待',
//     value: 'WAITING',
//     tagType: 'warning'
//   },
//   Serving: {
//     label: 'fusasa',
//     value: 'sadwq',
//     tagType: 'dqwdwq'
//   }
// };

// TODO:将数组拆分为单个对象
const k8sMonitorList = [
  {
    id: 'services',
    name: 'K8S Services',
    api: 'listServices',
    attributes: [
      {
        name: 'algoDeployName',
        columnWidth: 300,
        label: '算法在线化服务名称'
      },
      {
        name: 'creator',
        columnWidth: 300,
        label: '创建者'
      },
      {
        name: 'serviceUrl',
        columnWidth: 300,
        label: '服务地址'
      },
      {
        name: 'createTime',
        columnWidth: '',
        label: '创建时间'
      }
    ]
  },
  {
    id: 'deployments',
    name: 'K8S Deployments',
    api: 'listDeployments',
    attributes: [
      {
        name: 'algoDeployName',
        columnWidth: 200,
        fixBoolean: true,
        label: '算法在线化服务名称'
      },
      {
        name: 'creator',
        columnWidth: 100,
        label: '创建者'
      },
      {
        name: 'createTime',
        columnWidth: 200,
        label: '创建时间'
      },
      {
        name: 'replicas',
        columnWidth: 100,
        label: '总实例'
      },
      {
        name: 'readyReplicas',
        columnWidth: 100,
        label: '可用实例'
      },
      {
        name: 'image',
        columnWidth: 300,
        label: '镜像'
      },
      {
        name: 'command',
        columnWidth: 300,
        label: '容器执行的命令'
      },
      {
        name: 'args',
        columnWidth: 600,
        label: '命令参数'
      }
    ]
  },
  {
    id: 'job',
    name: 'K8S Job',
    api: 'listJobs',
    attributes: [
      {
        name: 'algoTrainName',
        columnWidth: 150,
        fixBoolean: true,
        label: '算法训练名称'
      },
      {
        name: 'creator',
        columnWidth: 100,
        label: '创建者'
      },
      {
        name: 'createTime',
        columnWidth: 200,
        label: '开始时间'
      },
      {
        name: 'endTime',
        columnWidth: 200,
        label: '结束时间'
      },
      {
        name: 'status',
        columnWidth: 100,
        label: '状态'
      },
      {
        name: 'image',
        columnWidth: 150,
        label: '镜像'
      },
      {
        name: 'command',
        columnWidth: 150,
        label: '容器执行的命令'
      },
      {
        name: 'args',
        columnWidth: '',
        label: '命令参数'
      }
    ]
  },
  {
    id: 'images',
    name: 'K8S Images',
    api: 'listImages',
    attributes: [
      {
        name: 'name',
        columnWidth: 600,
        label: '镜像名称'
      },
      {
        name: 'sizeMb',
        columnWidth: '',
        label: '镜像大小'
      }
    ]
  }
];

// AutoAlgoTaskDetail
const AutoAlgoTaskDetailTableList = [
  {
    id: 'train',
    info: 'trainInfo'
  },
  {
    id: 'algoService',
    info: 'algoServiceInfo'
  }
];

// trainInfo
const trainInfo = {
  id: 'train',
  name: '训练',
  data: 'autoAlgoTaskTrainList',
  api: '/algo_train/list',
  status: {
    name: 'status',
    statusList: 'trainStatus',
    columnWidth: 200,
    label: '训练状态'
  },
  operations: {
    name: 'operations',
    columnWidth: '',
    data: [
      {
        title: '查看日志',
        type: 'primary'
      },
      {
        title: '结果下载',
        type: 'success'
      }
    ],
    label: '操作'
  },
  attributes: [
    {
      name: 'name',
      columnWidth: 300,
      label: '名称'
    },
    {
      name: 'createTime',
      columnWidth: 200,
      label: '创建时间'
    },
    {
      name: 'updatedTime',
      columnWidth: 200,
      label: '创建时间'
    },
    // TODO: 准确率字段名
    {
      name: 'right',
      columnWidth: 200,
      label: '准确率'
    }
  ]
};

const algoServiceInfo = {
  id: 'algoService',
  name: '在线化服务',
  data: 'autoAlgoTaskServiceList',
  api: '/algo_train/list',
  status: {
    name: 'status',
    statusList: 'algoServiceStatus',
    columnWidth: '',
    label: '在线化服务状态'
  },
  operations: {
    name: 'operations',
    columnWidth: '',
    data: [
      {
        title: '弹性伸缩',
        type: 'primary'
      },
      {
        title: '滚动更新',
        type: 'primary'
      }
    ],
    label: '操作'
  },
  attributes: [
    {
      name: 'name',
      columnWidth: 300,
      label: '名称'
    },
    {
      name: 'createTime',
      columnWidth: 200,
      label: '创建时间'
    },
    {
      name: 'updatedTime',
      columnWidth: 200,
      label: '修改时间'
    },
    {
      name: 'replicas',
      columnWidth: 200,
      label: '实例数目'
    },
    {
      name: 'serviceUrl',
      columnWidth: 300,
      label: '服务地址'
    }
  ]
};

const AutoAlgoTaskInfo = {
  id: 'autoAlgoTask',
  name: '自助式算法任务',
  data: 'autoAlgoTaskTrainList',
  api: '/auto_algo_task/list',
  status: {
    name: 'status',
    statusList: 'AutoAlgoTaskStatus',
    columnWidth: '',
    label: '任务状态'
  },
  attributes: [
    {
      name: 'name',
      columnWidth: 350,
      label: '名称',
      jumpUrlId: 'id',
      jumpTitle: '点击查看自助式算法任务详情',
      jump: '/pdl/auto-algo-task/detail/'
    },
    {
      name: 'createTime',
      columnWidth: 200,
      label: '创建时间'
    },
    {
      name: 'modifyTime',
      columnWidth: 200,
      label: '更新时间'
    },
    {
      name: 'creatorName',
      columnWidth: 200,
      label: '创建者'
    },
    {
      name: 'datasetName',
      columnWidth: 250,
      label: '数据集名称',
      jumpUrlId: 'datasetId',
      jumpTitle: '点击查看数据集详情',
      jump: '/pdl/datasets/detail/'
    },
    {
      name: 'algoType',
      columnWidth: 200,
      label: '算法类型'
    }
  ]
};

const Modules = [
  {
    id: 'datasets',
    title: '数据集',
    content: 'datasets',
    icon: 'datasets'
  },
  {
    id: 'train',
    title: '训练',
    content: '',
    icon: 'train-logo'
  },
  {
    id: 'algo-service',
    title: '在线化服务',
    content: '',
    icon: 'algo-service'
  },
  {
    id: 'k8s',
    title: 'K8S',
    content: '',
    icon: 'k8s'
  },
  {
    id: 'auto-algo-task',
    title: '自助式算法任务',
    content: '',
    icon: 'auto-algo-task'
  }
];

const memory = ['4G', '8G', '16G'];
const cpuSpeci = ['intel i3', 'intel i5', 'intel i7'];
const cpuCore = ['1核', '2核', '4核'];
const gpuMemory = ['2G', '4G', '8G', '16G'];
const gpuNum = ['1个', '2个', '4个'];

const testClassifyImagesList = [
  {
    id: '1',
    url: require('@/assets/testClassifyImages/1.jpg')
  },
  {
    id: '12',
    url: require('@/assets/testClassifyImages/2.jpg')
  },
  {
    id: '11',
    url: require('@/assets/testClassifyImages/cat1.jpg')
  },
  {
    id: '10',
    url: require('@/assets/testClassifyImages/3.jpg')
  },
  {
    id: '9',
    url: require('@/assets/testClassifyImages/4.jpg')
  },
  {
    id: '8',
    url: require('@/assets/testClassifyImages/5.jpg')
  },
  {
    id: '7',
    url: require('@/assets/testClassifyImages/6.jpg')
  },
  {
    id: '6',
    url: require('@/assets/testClassifyImages/7.jpg')
  }
];

const autoAlgoTaskTrainList = [
  {
    name: 'auto_algo_task_12_resnet50',
    createTime: '2019-12-09 10:51:31',
    updatedTime: '2019-12-09 10:58:50',
    status: 'SUCCESS',
    right: '0.9565'
  },
  {
    name: 'auto_algo_task_12_resnet50v2',
    createTime: '2019-12-09 10:51:33',
    updatedTime: '2019-12-09 10:56:21',
    status: 'SUCCESS',
    right: '0.9674'
  },
  {
    name: 'auto_algo_task_12_mobilenet',
    createTime: '2019-12-09 10:51:34',
    updatedTime: '2019-12-09 10:57:42',
    status: 'SUCCESS',
    right: '0.9620'
  },
  {
    name: 'auto_algo_task_12_desnet121',
    createTime: '2019-12-09 10:51:36',
    updatedTime: '2019-12-09 11:10:16',
    status: 'SUCCESS',
    right: '0.9464'
  }
];

const autoAlgoTaskServiceList = [
  {
    name: 'auto_algo_task_12_resnet50v2',
    createTime: '2019-12-09 10:51:31',
    updatedTime: '2019-12-09 10:58:50',
    status: 'SERVING',
    replicas: 2,
    serviceUrl: 'http://192.168.64.2:30336'
  }
];

export default {
  algoTypes,
  framework,
  LANGUAGE,
  frameworkSearch,
  trainStatus,
  memory,
  cpuCore,
  cpuSpeci,
  gpuMemory,
  gpuNum,
  algoServiceStatus,
  k8sMonitorList,
  trainInfo,
  algoServiceInfo,
  Modules,
  testClassifyImagesList,
  autoAlgoTaskServiceList,
  autoAlgoTaskTrainList, // TODO:test list ,之后要删掉
  AutoAlgoTaskDetailTableList,
  AutoAlgoTaskStatus,
  AutoAlgoTaskInfo
};
