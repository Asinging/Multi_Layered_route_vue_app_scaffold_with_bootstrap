/*eslint-disable*/
export function login(payload) {
  // return axios.post(`/admin/login`, payload.query);
  return axios.post(`/auth/login`, payload.query);
}
export function logout() {
  return axios.post(`/auth/logout`);
}
