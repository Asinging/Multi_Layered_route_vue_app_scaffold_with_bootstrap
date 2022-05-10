/*eslint-disable*/
export function login(queries) {
  return axios.post(`/auth/login`, queries);
}

export function logout() {
  return axios.post(`/auth/logout`);
}
