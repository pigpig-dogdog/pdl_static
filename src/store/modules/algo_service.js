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
        var statusList = this.GLOBAL.algoServiceStatus;
        for (var i = 0; i < list.length; i++) {
          for (var j = 0; j < statusList.length; j++) {
            if (list[i].status === statusList[j].value) {
              list[i].statusText = statusList[j].statusText;
              list[i].api = statusList[j].api;
              list[i].buttonType = statusList[j].tagType;
            }
          }
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
