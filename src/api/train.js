import request from '@/utils/request';

const resultFileDownloadUrl = 'https://luojian-pdl.oss-cn-beijing.aliyuncs.com/algo-train/416aa1beeae848148d0a32ca1407a1a9/result.zip';

export function getTrainList (query) {
  return request({
    url: '/algo_train/list',
    method: 'get',
    params: query
  });
}

export function createTrain (query, data) {
  return request({
    url: '/algo_train/create',
    method: 'post',
    params: query,
    headers: {
      'Content-Type': 'multipart/form-data;'
    },
    data: data
  });
}

export function getTrainLog (trainId) {
  return request({
    url: '/algo_train/' + trainId + '/log',
    method: 'get'
  });
}

export function getTrainResult () {
  window.location.href = resultFileDownloadUrl;
}

export default {
  resultFileDownloadUrl
};
