import { BugFilter } from './BugFilter.jsx'
import { FolderList } from './FolderList.jsx'
import { Pagination } from './Pagination.jsx'

export function BugListHeader({ onAddBug, filterBy, setFilterBy, pageCount }) {


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
        {/* <Pagination onChangePage={onChangePage} pageIdx={filterBy.pageIdx}/> */}
        <button className="flex flex-row align-center" onClick={onAddBug}>
          <i className="fa-solid fa-plus"></i>
          Create New Bug
        </button>
      </section>
    </div>
  )
}
