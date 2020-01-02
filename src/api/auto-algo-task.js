import request from '@/utils/request';

export function getAutoAlgoTaskList () {
  return request({
    url: '/auto_algo_task/list',
    method: 'get'
  });
}
