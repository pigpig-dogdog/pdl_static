import request from '@/utils/request';

// 获取列表
export function getContainerList (api) {
  return request({
    url: '/container/' + api,
    method: 'get'
  });
}
