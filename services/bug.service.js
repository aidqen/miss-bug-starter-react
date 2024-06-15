import { utilService } from "./util.service.js"

export const bugService = {
    query,
    getById,
    remove,
    save
}

var bugs = utilService.readJsonFile('data/bugs.json')

function query() {
    return Promise.resolve(bugs)
}

function getById(bugId) {
    const bug = bugs.find(bug => bug._id === bugId)
    return Promise.resolve(bug)
}

function remove(bugId) {
    const idx = bugs.findIndex(bug => bug._id === bugId)
    bugs.splice(idx, 1)

    return _savebugsToFile()
}

function save(bugToSave) {
    console.log(bugToSave);
    if(bugToSave._id) {
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