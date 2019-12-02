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
    value: 'WAITING'
  },
  {
    label: '运行中',
    value: 'RUNNING'
  },
  {
    label: '成功',
    value: 'SUCCESS'
  },
  {
    label: '失败',
    value: 'FAILED'
  }
];

export default {
  algoTypes,
  framework,
  trainStatus
};
