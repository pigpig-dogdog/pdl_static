import request from '@/utils/request';

// 获取列表
export function getNodeList () {
  return request({
    url: '/container/node/list',
    method: 'get'
  });
}

export function getNodeDetail (name) {
  return request({
    url: '/container/node/detail',
    params: {
      nodeName: name
    },
    method: 'get'
  });
}

export function getServicesList () {
  return request({
    url: '/container/listServices',
    method: 'get'
  });
}

export function getJobsList () {
  return request({
    url: '/container/listJobs',
    method: 'get'
  });
}

export function getDeploymentsList () {
  return request({
    url: '/container/listDeployments',
    method: 'get'
  });
}

export function getImagesList () {
  return request({
    url: '/container/listImages',
    method: 'get'
  });
}
