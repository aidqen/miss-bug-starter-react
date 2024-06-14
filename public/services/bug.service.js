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
  const idx = bugs.findIndex(bug => bug._id === bugId)
  bugs.splice(idx, 1)
  console.log(bugs)
  return _saveBugsToFile(bugs)
}

function save(bug) {
  if (bug._id) {
    return storageService.put(STORAGE_KEY, bug)
  } else {
    return storageService.post(STORAGE_KEY, bug)
  }
}
