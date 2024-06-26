import { bugService } from '../services/bug.service.js'
import { showSuccessMsg, showErrorMsg } from '../services/event-bus.service.js'
import { BugList } from '../cmps/BugList.jsx'
import { BugsHeaderTools } from '../cmps/BugsHeaderTools.jsx'
import { BugListHeader } from '../cmps/BugListHeader.jsx'
import { BugTable } from '../cmps/BugTable/BugTable.jsx'

const { useState, useEffect } = React

export function BugIndex() {
  const [bugs, setBugs] = useState([])
  const [filterBy, setFilterBy] = useState({
    txt: '',
    minSeverity: 0,
    sortBy: { type: 'severity', direction: '1' },
    pageIdx: 0,
    folder: 'My Bugs'
  })
  const [pageCount, setPageCount] = useState(0)

  console.log(filterBy)

  useEffect(() => {
    loadBugs()
    loadPageCount()
  }, [filterBy])

  function loadBugs() {
    bugService.query(filterBy).then(setBugs)
  }

  function loadPageCount() {
    console.log('loadPageCount')
    bugService.getPageCount().then(setPageCount)
  }

  function onRemoveBug(bugId) {
    bugService
      .remove(bugId)
      .then(() => {
        console.log('Deleted Succesfully!')
        setBugs(prevBugs => prevBugs.filter(bug => bug._id !== bugId))
        showSuccessMsg('Bug removed')
      })
      .catch(err => {
        console.log('Error from onRemoveBug ->', err)
        showErrorMsg('Cannot remove bug')
      })
  }

  function onAddBug() {
    const bug = {
      title: prompt('Bug title?'),
      severity: +prompt('Bug severity?'),
      description: prompt('Bug description'),
    }
    bugService
      .save(bug)
      .then(savedBug => {
        console.log('Added Bug', savedBug)
        setBugs(prevBugs => [...prevBugs, savedBug])
        showSuccessMsg('Bug added')
      })
      .catch(err => {
        console.log('Error from onAddBug ->', err)
        showErrorMsg('Cannot add bug')
      })
  }

  function onEditBug(bug) {
    const severity = +prompt('New severity?')
    const bugToSave = { ...bug, severity }
    bugService
      .save(bugToSave)
      .then(savedBug => {
        console.log('Updated Bug:', savedBug)
        setBugs(prevBugs =>
          prevBugs.map(currBug =>
            currBug._id === savedBug._id ? savedBug : currBug
          )
        )
        showSuccessMsg('Bug updated')
      })
      .catch(err => {
        console.log('Error from onEditBug ->', err)
        showErrorMsg('Cannot update bug')
      })
  }

  return (
    <React.Fragment>
      <header className="bugs-header">
        <BugsHeaderTools />
        <h1>My Bugs</h1>
      </header>
      <BugListHeader filterBy={filterBy} setFilterBy={setFilterBy} pageCount={pageCount} onAddBug={onAddBug}/>
      <BugTable bugs={bugs} onEditBug={onEditBug} onRemoveBug={onRemoveBug}/>
      {(!bugs || !bugs.length) && <h1>No Bugs...</h1>}
      {bugs.length && <BugList bugs={bugs} onRemoveBug={onRemoveBug} onEditBug={onEditBug} />}
    </React.Fragment>
  )
}
