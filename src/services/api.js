import axios from 'axios'

const URL = {
  BASE: 'http://localhost:6060',
  LOGIN: '/access-tokens',
  SIGNUP: '/users',
  USER: '/me'
}

const http = axios.create({
  baseURL: URL.BASE,
  headers: {
    'Content-Type': 'application/json'
  }
})

function setAccessToken (jwt) {
  http.defaults.headers.common['x-access-token'] = jwt
}

async function login (formData) {
  const { data } = await http.post(`${URL.LOGIN}`, formData)
  return data
}

async function signup (formData) {
  const { data } = await http.post(`${URL.SIGNUP}`, formData)
  return data
}

async function getCurrentUser () {
  const { data } = await http.get(`${URL.USER}`)
  return data
}

export default {
  URL,
  setAccessToken,
  login,
  signup,
  getCurrentUser
}
