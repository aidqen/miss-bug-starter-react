import { BugFilter } from './BugFilter.jsx'
import { FolderList } from './FolderList.jsx'
const { useNavigate, Link } = ReactRouterDOM

export function BugListHeader({ filterBy, setFilterBy }) {
  const navigate = useNavigate()

  return (
    <div className="list-header flex flex-column">
      <FolderList folder={filterBy.folder} setFilterBy={setFilterBy} />
      <section className="filter-container flex flex-row justify-between">
        <BugFilter
          filterBy={filterBy}
          setFilterBy={setFilterBy}
        />
        <Link className="add-bug-btn flex flex-row align-center" to="/bug/add">
          <i className="fa-solid fa-plus"></i>
          Create New Bug
        </Link>
      </section>
    </div>
  )
}
