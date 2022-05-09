/*eslint-disable*/
export function login(queries) {

  return axios.post(`/auth/login`, queries)
}
export function refreshToken() {
  return axios.post(`/auth/refresh`)
}
export function logout() {
  return axios.post(`/auth/logout`)
}