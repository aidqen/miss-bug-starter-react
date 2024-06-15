import { storageService } from './async-storage.service.js'

const STORAGE_KEY = 'bugDB'
const BASE_URL = '/api/bug'

export const bugService = {
  query,
  getById,
  save,
  remove,
}

function query() {
    return axios.get(BASE_URL)
      .then(res => res.data)
}

function getById(bugId) {
  return query().then(bugs => bugs.find(bug => bug._id === bugId))
}

function remove(bugId) {
  return axios.get(`${BASE_URL}/${bugId}/remove`)
                      .then(res => res.data)
}

function save(bug) {
  const queryStr = `/save?title=${bug.title}&description=${bug.description}&severity=${bug.severity}`
  return axios.get(`${BASE_URL}${queryStr}`).then(res => res.data)
}
