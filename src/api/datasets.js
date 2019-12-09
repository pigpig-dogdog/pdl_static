import request from '@/utils/request';

export function getDatasetsList (query) {
  return request({
    url: '/dataset/list',
    method: 'get',
    params: query
  });
}

export function getDatasetDetail (datasetId) {
  return request({
    url: '/dataset/' + datasetId,
    method: 'get'
  });
}

export function createDataset (data) {
  return request({
    url: '/dataset/create',
    method: 'post',
    data: data
  });
}

export function getImagesList (query, id) {
  return request({
    url: '/dataset/' + id + '/listImages',
    method: 'get',
    params: query
  });
}

export function uploadImage (query, id, data) {
  return request({
    url: '/dataset/' + id + '/uploadImage',
    method: 'post',
    params: query,
    data: data
  });
}

// 数据标注
export function getClassifyImagesList (query, id) {
  return request({
    url: '/dataset/' + id + '/listImages',
    method: 'get',
    params: query
  });
}
