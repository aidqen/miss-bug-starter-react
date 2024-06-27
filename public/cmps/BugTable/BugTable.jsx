import { BugActions } from './BugActions.jsx'
import { BugRow } from './BugRow.jsx'
import { BugTableHead } from './BugTableHead.jsx'

export function BugTable({ bugs, onRemoveBug, onEditBug, setFilterBy, filterBy }) {
    
  function handleChange(value) {
    // const { value } = target
      setFilterBy(prevFilterBy => ({
        ...prevFilterBy,
        sortBy: { type: value.type, direction: value.direction },
      }))
  }

  return (
    <table className="bug-table">
      <BugTableHead handleChange={handleChange} filterBy={filterBy}/>
      <tbody>
        {bugs.map(bug => {
          return (
            <tr key={bug._id}>
              <BugRow
                bug={bug}
              />
              <BugActions onRemoveBug={onRemoveBug}
                onEditBug={onEditBug}/>
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}
