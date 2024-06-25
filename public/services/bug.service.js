import { storageService } from './async-storage.service.js'

const STORAGE_KEY = 'bugDB'
const BASE_URL = '/api/bug'

export const bugService = {
  query,
  getById,
  save,
  remove,
  getPageCount,
}

function query(filterBy) {
  return axios.get(BASE_URL, { params: filterBy }).then(res => res.data)
}

function getPageCount() {
  console.log('loadPageCount');
  return axios.get('/api/bug/pageCount').then(res => res.data)
}

function getById(bugId) {
  return axios.get(BASE_URL + `/${bugId}`).then(res => res.data)
}

function remove(bugId) {
  return axios.delete(BASE_URL + `/${bugId}`).then(res => res.data)
}

function save(bug) {
  return axios.post(BASE_URL, bug).then(res => res.data)
}
