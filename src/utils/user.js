import Cookies from 'js-cookie';

const TokenKey = 'Admin-Token';
const Username = 'username';

export function getToken () {
  return Cookies.get(TokenKey);
}

export function setToken (token) {
  return Cookies.set(TokenKey, token);
}

export function removeToken () {
  return Cookies.remove(TokenKey);
}

export function getUsername () {
  return Cookies.get(Username);
}

export function setUsername (name) {
  return Cookies.set(Username, name);
}

export function removeUsername () {
  return Cookies.remove(Username);
}
