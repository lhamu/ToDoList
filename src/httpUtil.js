import axios from 'axios';

export function get(url) {
  //data tanne
  return axios({
    method: 'GET',
    url: url
  });
}

export function post(url, data) {
  // naya data create garne
  return axios({
    method: 'POST',
    url: url,
    data: data
  });
}

export function put(url, data) {
  // update
  return axios({
    method:'PUT',
    url:url,
    data:data
  });
}

export function remove(url) {
  // delete
  return axios({
    method:'DELETE',
    url:url
  });
}