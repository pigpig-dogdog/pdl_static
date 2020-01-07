import request from '@/utils/request';

export function getAutoAlgoTaskList () {
  return request({
    url: '/auto_algo_task/list',
    method: 'get'
  });
}

export function getAutoAlgoTaskDetail (id) {
  return request({
    url: '/auto_algo_task/' + id + '/detail',
    method: 'get'
  });
}
