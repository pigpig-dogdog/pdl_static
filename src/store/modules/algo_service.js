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
        var list = response.data;
        if (list.status === 'EXITED') {
          list.statusText = '启动服务';
          list.api = 'start';
        } else {
          list.statusText = '停止服务';
          list.api = 'stop';
        }
        commit('SET_ALGOSERVICE_LIST', list);
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
