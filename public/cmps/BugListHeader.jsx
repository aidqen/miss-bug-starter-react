import { BugFilter } from './BugFilter.jsx'
import { FolderList } from './FolderList.jsx'
import { Pagination } from './Pagination.jsx'

export function BugListHeader({ onAddBug, filterBy, setFilterBy, pageCount }) {

  return (
    <div className="list-header flex flex-column">
      <FolderList folder={filterBy.folder} setFilterBy={setFilterBy} />
      <section className="filter-container flex flex-row justify-between">
        <BugFilter
          filterBy={filterBy}
          setFilterBy={setFilterBy}
        />
        <button className="add-bug-btn flex flex-row align-center" onClick={onAddBug}>
          <i className="fa-solid fa-plus"></i>
          Create New Bug
        </button>
      </section>
    </div>
  )
}
