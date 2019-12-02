import { getAlgoServiceList } from '@/api/algo-service';

const state = {
  algoServiceList: []
};

const mutations = {
  SET_ALGOSERVICE_LIST: (state, list) => {
    state.algoServiceList = list;
  }
};

const actions = {
  getAlgoServiceList ({ commit }, query) {
    return new Promise((resolve, reject) => {
      getAlgoServiceList(query).then(response => {
        commit('SET_ALGOSERVICE_LIST', response.data);
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
