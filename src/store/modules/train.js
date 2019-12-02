import { getTrainList } from '@/api/train';

const state = {
  trainList: []
};

const mutations = {
  SET_TRAIN_LIST: (state, list) => {
    state.trainList = list;
  }
};

const actions = {
  getTrainList ({ commit }, query) {
    return new Promise((resolve, reject) => {
      getTrainList(query).then(response => {
        commit('SET_TRAIN_LIST', response.data);
        resolve();
      }).catch(error => {
        reject(error);
      });
    });
  }
};

export default {
  namespaced: true, // TODO, FIXME
  state,
  mutations,
  actions
};
