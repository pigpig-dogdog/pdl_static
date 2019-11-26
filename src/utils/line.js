import Cookies from 'js-cookie';

const LineId = 'Line-Id';

export function getLineId () {
  return Cookies.get(LineId);
}

export function setLineId (lineId) {
  return Cookies.set(LineId, lineId);
}

export function removeLineId () {
  return Cookies.remove(LineId);
}
