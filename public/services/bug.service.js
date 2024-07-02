import { storageService } from './async-storage.service.js'

const STORAGE_KEY = 'bugDB'
const BASE_URL = '/api/bug'

export const bugService = {
  query,
  getById,
  save,
  remove,
  getBugListInfo,
}

function query(filterBy, userId) {
  return axios.get(BASE_URL, {params: filterBy }).then(res => res.data)
}

function getBugListInfo(filterBy) {
  return axios.get(BASE_URL + '/bugListInfo', { params: filterBy }).then(res => res.data)
}

function getById(bugId) {
  return axios.get(BASE_URL + `/${bugId}`).then(res => res.data)
}

function remove(bugId) {
  return axios.delete(BASE_URL + `/${bugId}`).then(res => res.data)
}

function save(bug, user) {
  return axios.post(BASE_URL, {...bug, user}).then(res => res.data)
}
