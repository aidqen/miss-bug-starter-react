import { BugActions } from './BugActions.jsx'
import { BugRow } from './BugRow.jsx'
import { BugTableHead } from './BugTableHead.jsx'

export function BugTable({ bugs, onRemoveBug, onEditBug }) {
  return (
    <table className='bug-table'>
      <BugTableHead />
      <tbody>
        {bugs.map(bug => {
          return (
          <tr key={bug._id}>
              <BugRow bug={bug} onRemoveBug={onRemoveBug} onEditBug={onEditBug}/>
              <BugActions />
          </tr>
        )})}
      </tbody>
    </table>
  )
}
