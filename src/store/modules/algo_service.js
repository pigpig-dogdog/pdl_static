import { getAlgoServiceList } from '@/api/algo-service';

const state = {
  algoServiceList: []
};

const mutations = {
  SET_ALGOSERVICE_LIST: (state, list) => {
    // state.algoServiceList = list;
    state.algoServiceList = [
      {
        name: 'gry',
        creatorName: 'ff'
      },
      {
        name: 'gry',
        creatorName: 'ff'
      }
    ];
  }
};

const actions = {
  getAlgoServiceList ({ commit }, query) {
    return new Promise((resolve, reject) => {
      getAlgoServiceList(query).then(response => {
        var list = response.data;
        commit('SET_ALGOSERVICE_LIST', list);
        resolve();
      }).catch(error => {
        reject(error);
        commit('SET_ALGOSERVICE_LIST', []);
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
