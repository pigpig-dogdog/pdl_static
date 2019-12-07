import request from '@/utils/request';

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
