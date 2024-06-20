import { storageService } from './async-storage.service.js'

const STORAGE_KEY = 'bugDB'
const BASE_URL = '/api/bug'

export const bugService = {
  query,
  getById,
  save,
  remove,
}

function query(filterBy) {
  return axios.get(BASE_URL, {params: filterBy})
  .then(res => res.data)
  .then(bugs => {
    // if (!filterBy) return bugs
    //   const { txt, minSeverity } = filterBy
    //   if (txt) {
    //     const regExp = new RegExp(txt, 'i')
    //     bugs = bugs.filter(bug => regExp.test(bug.title) || regExp.test(bug.description))
    //   }
    //   if (minSeverity) {
    //     bugs = bugs.filter(bug => bug.severity >= minSeverity)
    //   }
      return bugs
    })
}

function getById(bugId) {
  return axios.get(BASE_URL, {params: {bugId}}).then(res => res.data)
}

function remove(bugId) {
  return axios.delete(BASE_URL, {params: {bugId}}).then(res => res.data)
}

function save(bug) {
  var queryStr = `/save?title=${bug.title}&description=${bug.description}&severity=${bug.severity}`
  if (bug._id) queryStr = `/save?_id=${bug._id}&createdAt=${bug.createdAt}&title=${bug.title}&description=${bug.description}&severity=${bug.severity}`
  else queryStr = `/save?title=${bug.title}&description=${bug.description}&severity=${bug.severity}`
  return axios.get(`${BASE_URL}${queryStr}`).then(res => res.data)
}
