import { storageService } from './async-storage.service.js'
import { utilService } from './util.service.js'
// import axios from 'axios'


const STORAGE_KEY = 'bugDB'

export const bugService = {
  query,
  getById,
  save,
  remove,
}

// const bugs = utilService.readJsonFile('data/bugs.json')

// function query() {
//   return Promise.resolve(bugs)
// }

function query() {
  return new Promise((resolve, reject) => {
    axios.get('data/bugs.json')
        .then(res => resolve(res.data))
        .catch(err => reject(err))
  })
}


// function query() {
//   return axios.get('/data/bugs.json');
// }


function getById(bugId) {
  return query()
  .then(bugs => bugs.find(bug => bug._id === bugId))
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

function _saveBugsToFile(bugsToSave) {
  return utilService.writeJsonFile('data/bugs.json', bugsToSave)
}
