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

const AutoAlgoTaskDetailList = {
  autoAlgoTask: {
    info: 'AutoAlgoTaskInfo',
    list: 'autoAlgoTaskList'
  },
  algoService: {
    info: 'algoServiceInfo',
    list: 'algoServiceList'
  },
  train: {
    info: 'trainInfo',
    list: 'trainList'
  }
};

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
    id: 'autoAlgoTask',
    info: 'AutoAlgoTaskInfo',
    list: 'autoAlgoTaskList'
  },
  {
    id: 'algoService',
    info: 'algoServiceInfo',
    list: 'algoServiceList'
  },
  {
    id: 'train',
    info: 'trainInfo',
    list: 'trainList'
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
      columnWidth: 200,
      label: '名称',
      jumpUrlId: 'id',
      jumpTitle: '点击查看训练详情',
      jump: '/pdl/train/detail/'
    },
    {
      name: 'createTime',
      columnWidth: 200,
      label: '创建时间'
    },
    {
      name: 'updatedTime',
      columnWidth: 200,
      detailHidden: true,
      label: '更新时间'
    },
    // TODO: 准确率字段名
    {
      name: 'acc',
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
    detailHidden: true,
    columnWidth: 450,
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
      columnWidth: 200,
      label: '名称',
      jumpUrlId: 'id',
      jumpTitle: '点击查看在线化服务详情',
      jump: '/pdl/algo-service/detail/'
    },
    {
      name: 'createTime',
      columnWidth: 200,
      label: '创建时间'
    },
    {
      name: 'updatedTime',
      columnWidth: 200,
      detailHidden: true,
      label: '修改时间'
    },
    {
      name: 'replicas',
      columnWidth: 200,
      label: '实例数目'
    },
    {
      name: 'serviceUrl',
      columnWidth: 200,
      label: '服务地址'
    }
  ]
};

const systemInfo = {
  id: 'k8s-node-systemInfo',
  name: 'System Information',
  attributes: [
    {
      name: 'machineID',
      columnWidth: 200,
      label: 'Machine ID'
    },
    {
      name: 'systemUUID',
      columnWidth: 200,
      label: 'System UUID'
    },
    {
      name: 'bootID',
      columnWidth: 200,
      label: 'Boot ID'
    },
    {
      name: 'containerRuntimeVersion',
      columnWidth: 200,
      label: 'Container Runtime Version'
    },
    {
      name: 'kernelVersion',
      columnWidth: 200,
      label: 'kernel Version'
    },
    {
      name: 'osImage',
      columnWidth: 200,
      label: 'OS Image'
    },
    {
      name: 'kubeletVersion',
      columnWidth: 200,
      label: 'Kubelet Version'
    },
    {
      name: 'architecture',
      columnWidth: 200,
      label: 'Architecture'
    },
    {
      name: 'operatingSystem',
      columnWidth: '',
      label: 'Operating System'
    }
  ]
};

const nodeTable = {
  id: 'k8s-node',
  name: 'k8s-node',
  api: '/node/list',
  attributes: [
    {
      name: 'name',
      columnWidth: 200,
      label: 'Name',
      jumpUrlId: 'name',
      jumpTitle: '点击查看k8s-node详情',
      jump: '/pdl/k8s/node/'
    },
    {
      name: 'Ready',
      columnWidth: 200,
      label: 'Ready'
    },
    {
      name: 'OS',
      columnWidth: 200,
      label: 'OS'
    },
    {
      name: 'CpuCores',
      columnWidth: 200,
      label: 'Cpu cores'
    },
    {
      name: 'Memory',
      columnWidth: 200,
      label: 'Memory'
    },
    {
      name: 'CreationTime',
      columnWidth: '',
      label: 'CreationTime'
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
      columnWidth: 200,
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
      detailHidden: true,
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
      columnWidth: 200,
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
    content: '● 海量图片存储\n● 算法赋能，提升标注效率',
    icon: 'datasets'
  },
  {
    id: 'train',
    title: '训练',
    content: '● 一键提交训练，实时查看日志\n● 无需搭建环境，云端容器运行代码，支持主流深度学习框架',
    icon: 'train-logo'
  },
  {
    id: 'algo-service',
    title: '在线化服务',
    content: '● 一键部署算法，无需编写服务化代码，即可得到算法服务RESTful API\n● 平台赋能算法服务：多节点部署，负载均衡、弹性伸缩、滚动更新\n● 无需搭建环境，云端容器运行代码，支持主流深度学习框架',
    icon: 'algo-service'
  },
  {
    id: 'auto-algo-task',
    title: '自助式算法任务',
    content: '● 无需编写一行代码，只需完成数据标注，平台自动完成算法训练与部署上线',
    icon: 'auto-algo-task'
  },
  {
    id: 'k8s',
    title: 'Kubernets监控台',
    content: '● 实时监控k8s集群',
    icon: 'k8s'
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
  nodeTable,
  trainInfo,
  algoServiceInfo,
  Modules,
  testClassifyImagesList,
  autoAlgoTaskServiceList,
  autoAlgoTaskTrainList, // TODO:test list ,之后要删掉
  AutoAlgoTaskDetailTableList,
  AutoAlgoTaskStatus,
  AutoAlgoTaskInfo,
  AutoAlgoTaskDetailList,
  systemInfo
};
