import request from '@/utils/request';

export function getDatasetsList () {
  return request({
    url: '/datasets/list',
    method: 'get'
  });
}
