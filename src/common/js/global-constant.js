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

const framework = ['TENSORFLOW', 'KERAS', 'PYTORCH', 'MXNET', 'CAFFE'];

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

const algoServiceStatus = [
  {
    label: '等待',
    value: 'WAITING',
    tagType: 'warning'
  },
  {
    label: '运行中',
    value: 'SERVING',
    tagType: ''
  },
  {
    label: '失败',
    value: 'EXITED',
    tagType: 'danger'
  }
];

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
        columnWidth: 600,
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

export default {
  algoTypes,
  framework,
  trainStatus,
  memory,
  cpuCore,
  cpuSpeci,
  gpuMemory,
  gpuNum,
  algoServiceStatus,
  k8sMonitorList,
  testClassifyImagesList
};
