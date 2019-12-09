const algoTypes = [
  {
    label: '分类',
    value: 'CLASSIFICATION'
  },
  {
    label: '检测',
    value: 'DETECTION'
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
export default {
  algoTypes,
  framework,
  trainStatus,
  memory,
  cpuCore,
  cpuSpeci,
  gpuMemory,
  gpuNum,
  algoServiceStatus
};
