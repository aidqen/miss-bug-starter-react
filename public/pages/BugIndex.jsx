import { bugService } from '../services/bug.service.js'
import { showSuccessMsg, showErrorMsg } from '../services/event-bus.service.js'
import { BugListHeader } from '../cmps/BugTable/BugListHeader.jsx'
import { BugTable } from '../cmps/BugTable/BugTable.jsx'
import { Pagination } from '../cmps/Pagination.jsx'

const { useState, useEffect } = React

export function BugIndex({user}) {
  const [bugs, setBugs] = useState([])
  const [filterBy, setFilterBy] = useState({
    txt: '',
    minSeverity: 0,
    sortBy: { type: 'severity', direction: '1' },
    pageIdx: 0,
    folder: 'My Bugs',
    userId: user._id
  })
  const [bugsInfo, setBugsInfo] = useState(
    { bugsCount: 0, pageCount: 0, pageSize: 0 })

  useEffect(() => {
    loadBugs()
  }, [filterBy])


  useEffect(() => {
    loadBugListInfo()
  }, [bugs])
  

  function loadBugs() {
    bugService.query(filterBy).then(setBugs)
  }

  function loadBugListInfo() {
    bugService.getBugListInfo(filterBy).then(setBugsInfo)
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

  function onAddBug(data) {
    bugService
      .save(data, user)
      .then(savedBug => {
        console.log('Added Bug', savedBug)
        loadBugs()
        showSuccessMsg('Bug added')
      })
      .catch(err => {
        console.log('Error from onAddBug ->', err)
        showErrorMsg('Cannot add bug')
      })
  }

  function onEditBug(bug) {
    const bugToSave = { ...bug, severity }
    bugService
      .save(bugToSave, user)
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

  function onChangePage(diff) {
    const { pageIdx } = filterBy
    if (pageIdx + diff < 0) return
    if (diff === 1) {
      if (pageIdx + diff >= bugsInfo.pageCount) return
    }
    const currPage = pageIdx + diff

    setFilterBy(prevFilterBy => ({ ...prevFilterBy, pageIdx: currPage }))
  }


  return (
    <React.Fragment>
      <div className="bugs-header">
        <h1>My Bugs</h1>
      </div>
      <BugListHeader
        filterBy={filterBy}
        setFilterBy={setFilterBy}
        pageCount={bugsInfo.pageCount}
      />
      <BugTable
        user={user}
        bugs={bugs}
        onEditBug={onEditBug}
        onRemoveBug={onRemoveBug}
        filterBy={filterBy}
        setFilterBy={setFilterBy}
      />
      <Pagination
        onChangePage={onChangePage}
        pageIdx={filterBy.pageIdx}
        bugsInfo={bugsInfo}
      />
    </React.Fragment>
  )
}
