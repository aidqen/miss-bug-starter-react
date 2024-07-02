import { BugActions } from './BugActions.jsx'
import { BugRow } from './BugRow.jsx'
import { BugTableHead } from './BugTableHead.jsx'
const { useState } = React

export function BugTable({
  user,
  bugs,
  onRemoveBug,
  setFilterBy,
  filterBy,
  setEditOrAdd,
  setIsAbleToEdit,
}) {
  function handleChange(value) {
    setFilterBy(prevFilterBy => ({
      ...prevFilterBy,
      sortBy: { type: value.type, direction: value.direction },
    }))
  }

  console.log(user)

  return (
    <table className="bug-table">
      <BugTableHead handleChange={handleChange} filterBy={filterBy} />
      <tbody>
        {bugs.map(bug => {
          const isAbleToEdit =
            user.fullname === bug.owner.fullname || user.isAdmin
          return (
            <tr key={bug._id}>
              <BugRow bug={bug} />
              {isAbleToEdit && (
                <BugActions
                  bugId={bug._id}
                  onRemoveBug={onRemoveBug}
                />
              )}
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}
