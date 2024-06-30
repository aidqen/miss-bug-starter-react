export function FolderList({ folder, setFilterBy }) {
  const labels = ['My Bugs', 'All Bugs', 'Deleted Bugs']

  function handleChange(label) {
    setFilterBy(prevFilterBy => ({ ...prevFilterBy, folder: label }))
  }

  return (
    <div className="folder-container flex flex-row">
      {labels.map(label => (
        <label key={label}
          className={folder === label ? 'active' : ''}
          onClick={() => handleChange(label)}
        >
          {label}
        </label>
      ))}
    </div>
  )
}
