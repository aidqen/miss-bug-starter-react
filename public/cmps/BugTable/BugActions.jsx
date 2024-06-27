export function BugActions({ bug, onRemoveBug, onEditBug }) {
  return (
    <React.Fragment>
      <td className="bug-actions">
        <i
          className="remove-bug-btn fa-regular fa-pen-to-square"
          onClick={() => onEditBug(bug)}
        ></i>
        <i
          className="edit-bug-btn fa-regular fa-trash-can"
          onClick={() => onRemoveBug(bug._id)}
        ></i>
      </td>
    </React.Fragment>
  )
}
