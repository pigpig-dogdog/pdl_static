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

export function getImagesNumber (datasetId) {
  return request({
    url: '/dataset/' + datasetId + '/imagesNumberDetail',
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

export function getTagImagesList (query, id) {
  return request({
    url: '/dataset/' + id + '/listImages',
    method: 'get',
    params: query
  });
}

// 获取下一张检测图片
export function getNextImage (query, id) {
  return request({
    url: '/dataset/' + id + '/getNextImage',
    method: 'get',
    params: query
  });
}

// 获取上一张检测图片
export function getPrevImage (query, id) {
  return request({
    url: '/dataset/' + id + '/getPrevImage',
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
    url: '/dataset/' + id + '/getNextBatchUnannotatedImages',
    method: 'get',
    params: query
  });
}

export function submitClassify (id, data) {
  return request({
    url: '/dataset/' + id + '/annotationClassification',
    method: 'post',
    data: data
  });
}
