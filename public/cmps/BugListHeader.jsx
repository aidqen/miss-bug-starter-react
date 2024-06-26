import { BugFilter } from './BugFilter.jsx'
import { BugsSort } from './BugsSort.jsx'
import { FolderList } from './FolderList.jsx'
import { Pagination } from './Pagination.jsx'

export function BugListHeader({ onAddBug, filterBy, setFilterBy, pageCount }) {

  function onChangePage(diff) {
    const { pageIdx } = filterBy
    if (pageIdx + diff < 0) return
    if (diff === 1) {
      if (pageIdx === pageCount) return
    }
    const currPage = pageIdx + diff

    setFilterBy(prevFilterBy => ({ ...prevFilterBy, pageIdx: currPage }))
  }

  function handleChange({ target }) {
    const { name, value } = target
      setFilterBy(prevFilterBy => ({ ...prevFilterBy, [name]: value }))
  }

  return (
    <div className="list-header flex flex-column">
      <FolderList folder={filterBy.folder} setFilterBy={setFilterBy} />
      <section className="filter-container flex flex-column">
        <BugFilter
          filterBy={filterBy}
          handleChange={handleChange}
        />
        <BugsSort
          filterBy={filterBy}
          setFilterBy={setFilterBy}
          handleChange={handleChange}
        />
        <Pagination onChangePage={onChangePage} pageIdx={filterBy.pageIdx}/>
        <button className="flex flex-row align-center" onClick={onAddBug}>
          <i className="fa-solid fa-plus"></i>
          Create New Bug
        </button>
      </section>
    </div>
  )
}
