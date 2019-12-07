import { getDatasetsList, getImagesList } from '@/api/datasets';

const state = {
  datasetsList: [],
  imagesList: [],
  tagsList: []
};

const mutations = {
  SET_DATASETS_LIST: (state, list) => {
    state.datasetsList = list;
  },
  SET_IMAGES_LIST: (state, list) => {
    state.imagesList = list;
  },
  SET_TAGS_LIST: (state, list) => {
    state.tagsList = list;
  }
};

const actions = {
  getDatasetsList ({ commit }, query) {
    return new Promise((resolve, reject) => {
      getDatasetsList(query).then(response => {
        commit('SET_DATASETS_LIST', response.data);
        resolve();
      }).catch(error => {
        reject(error);
      });
    });
  },
  getImagesList ({ commit }, data) {
    return new Promise((resolve, reject) => {
      getImagesList(data.query, data.id).then(response => {
        commit('SET_IMAGES_LIST', response.data);
        resolve();
      }).catch(error => {
        reject(error);
      });
    });
  },
  getTagsList ({ commit }, data) {
    commit('SET_TAGS_LIST', data);
  }
};

export default {
  namespaced: true, // TODO, FIXME
  state,
  mutations,
  actions
};
