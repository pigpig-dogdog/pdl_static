import request from '@/utils/request';

export function getAlgoServiceList (query) {
  return request({
    url: '/algo_deploy/list',
    method: 'get',
    params: query
  });
}

export function createAlgoService (query, data) {
  return request({
    url: '/algo_deploy/create',
    method: 'post',
    params: query,
    headers: {
      'Content-Type': 'multipart/form-data;'
    },
    data: data
  });
}
