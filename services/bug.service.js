import { utilService } from './util.service.js'

export const bugService = {
  query,
  getById,
  remove,
  save,
  getPageCount
}

const PAGE_SIZE = 3
var bugs = utilService.readJsonFile('data/bugs.json')

function query(filterBy) {
  // console.log(filterBy);
  var filteredBugs = bugs
  if (!filterBy) return Promise.resolve(filteredBugs)
  
  const { txt, minSeverity, sortBy, pageIdx } = filterBy
  if (txt) {
    const regExp = new RegExp(txt, 'i')
    filteredBugs = bugs.filter(
      bug => regExp.test(bug.title) || regExp.test(bug.description)
    )
  }
  if (minSeverity) {
    filteredBugs = bugs.filter(bug => bug.severity >= minSeverity)
  }

  if (sortBy.type) {
    switch (sortBy.type) {
      case 'severity':
        filteredBugs = filteredBugs.sort(
          (bug1, bug2) => (bug1.severity - bug2.severity) * sortBy.direction
        )
        break
      case 'date':
        filteredBugs = filteredBugs.sort(
          (bug1, bug2) => (bug1.createdAt - bug2.createdAt) * sortBy.direction
        )
        break
      case 'title':
        if (sortBy.direction === '1')
          filteredBugs = filteredBugs.sort((bug1, bug2) =>
            bug1.title.localeCompare(bug2.title)
          )
        else
          filteredBugs = filteredBugs.sort((bug1, bug2) =>
            bug2.title.localeCompare(bug1.title)
          )
        break
        case 'description':
          if (sortBy.direction === '1') {
            filteredBugs = filteredBugs.sort((bug1, bug2) =>
              bug1.description.localeCompare(bug2.description))
          } else filteredBugs = filteredBugs.sort((bug1, bug2) =>
            bug2.description.localeCompare(bug1.description))
        break
    }
  }

  const startIdx = pageIdx * PAGE_SIZE
  filteredBugs = filteredBugs.slice(startIdx, startIdx + PAGE_SIZE)
  return Promise.resolve(filteredBugs)
}

function getById(bugId) {
  const bug = bugs.find(bug => bug._id === bugId)
  return Promise.resolve(bug)
}

function getPageCount() {
  return query()
          .then(bugs => {
            return Math.floor(bugs.length / PAGE_SIZE)
          })
}

function remove(bugId) {
  const idx = bugs.findIndex(bug => bug._id === bugId)
  bugs.splice(idx, 1)

  return _savebugsToFile()
}

function save(bugToSave) {
  console.log(bugToSave)
  if (bugToSave._id) {
    const idx = bugs.findIndex(bug => bug._id === bugToSave._id)
    bugs.splice(idx, 1, bugToSave)
  } else {
    bugToSave._id = utilService.makeId()
    bugToSave.createdAt = Date.now()
    bugs.push(bugToSave)
  }
  return _savebugsToFile().then(() => bugToSave)
}

function _savebugsToFile() {
  return utilService.writeJsonFile('./data/bugs.json', bugs)
}
