export function BugActions({ bug, onRemoveBug, onEditBug }) {
  console.log(bug)
  return (
    <React.Fragment>
      <td className="bug-actions">
        <i
          className="remove-bug-btn fa-regular fa-pen-to-square"
          onClick={() => onRemoveBug(bug)}
        ></i>
        <i
          className="edit-bug-btn fa-regular fa-trash-can"
          onClick={() => onEditBug(bug)}
        ></i>
      </td>
    </React.Fragment>
  )
}
