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

export function controlAlgoService (serviceId, operation) {
  return request({
    url: '/algo_deploy/' + operation,
    method: 'post',
    params: {
      id: serviceId
    },
    headers: {
      'Content-Type': 'x-www-form-urlencoded;'
    }
  });
}

export function updateReplicas (serviceId, replicas) {
  return request({
    url: '/algo_deploy/scale',
    method: 'post',
    params: {
      id: serviceId,
      replicas: replicas
    },
    headers: {
      'Content-Type': 'x-www-form-urlencoded;'
    }
  });
}

export function updateCodeModel (serviceId, mainClassPath, codeModel) {
  return request({
    url: '/algo_deploy/updateCodeModel',
    method: 'post',
    data: codeModel,
    params: {
      id: serviceId,
      mainClassPath: mainClassPath
    },
    headers: {
      'Content-Type': 'multipart/form-data;'
    }
  });
}
