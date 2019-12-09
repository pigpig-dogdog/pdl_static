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
  // {
  //   id: '5',
  //   url: require('@/assets/testClassifyImages/8.jpg')
  // },
  // {
  //   id: '4',
  //   url: require('@/assets/testClassifyImages/9.jpg')
  // },
  // {
  //   id: '3',
  //   url: require('@/assets/testClassifyImages/10.jpg')
  // },
  // {
  //   id: '2',
  //   url: require('@/assets/testClassifyImages/12.jpg')
  // }
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
  testClassifyImagesList
};
