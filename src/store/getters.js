const getters = {
  sidebar: state => state.app.sidebar,
  size: state => state.app.size,
  device: state => state.app.device,
  token: state => state.user.token,
  username: state => state.user.username,
  datasetsList: state => state.datasets.datasetsList,
  imagesList: state => state.datasets.imagesList,
  tagsList: state => state.datasets.tagsList,
  algoType: state => state.datasets.algoType,
  trainList: state => state.train.trainList,
  algoServiceList: state => state.algo_service.algoServiceList
};

export default getters;
