const { Link, useNavigate } = ReactRouterDOM
export function BugActions({ bugId, onRemoveBug }) {
  const navigate = useNavigate()

  function onEditBug() {
    navigate(`/bug/edit/${bugId}`)
  }
  
  return (
    <React.Fragment>
      <td className="bug-actions">
        <i
          className="remove-bug-btn fa-regular fa-pen-to-square"
          onClick={onEditBug}
        ></i>
        <i
          className="edit-bug-btn fa-regular fa-trash-can"
          onClick={() => onRemoveBug(bug._id)}
        ></i>
        <Link to={`/bug/${bugId}`}>
          <i className="details-bug-btn fa-regular fa-file"></i>
        </Link>
      </td>
    </React.Fragment>
  )
}
