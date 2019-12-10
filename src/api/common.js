import request from '@/utils/request';

// 获取列表
export function getList (api) {
  return request({
    url: api,
    method: 'get'
  });
}
