import { login, register } from '@/api/user';
import { setToken, removeToken, setUsername, removeUsername } from '@/utils/user';

const state = {
  token: '',
  username: ''
};

// 修改state中的值
const mutations = {
  SET_TOKEN: (state, token) => {
    state.token = token;
  },
  SET_USERNAME: (state, username) => {
    state.username = username;
  }
};

// 提交mutations的函数
const actions = {
  login ({ commit }, loginForm) {
    const { username, password } = loginForm;
    return new Promise((resolve, reject) => {
      login({username: username.trim(), password: password}).then(response => {
        commit('SET_TOKEN', response.data.token);
        commit('SET_USERNAME', username);
        setUsername(username);
        setToken(response.data.token);
        resolve();
      }).catch(error => {
        reject(error);
      });
    });
  },
  register ({ commit }, registerForm) {
    const { username, password } = registerForm;
    return new Promise((resolve, reject) => {
      register({username: username.trim(), password: password}).then(response => {
        commit('SET_USERNAME', username);
        setUsername(username);
        resolve();
      }).catch(error => {
        console.log(error);
        reject(error);
      });
    });
  },
  logout ({ commit }) {
    return new Promise((resolve, reject) => {
      commit('SET_TOKEN', '');
      commit('SET_USERNAME', '');
      removeToken();
      removeUsername();
      resolve();
    });
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions
};
