
const { useState, useEffect } = React
export function BugFilter({ setFilterBy ,filterBy, handleChange }) {
  const [filterByToEdit, setFilterByToEdit] = useState(filterBy);
  
  function handleSubmit(ev) {
    ev.preventDefault()
    setFilterBy(filterByToEdit)
  }
  
  function handleChange({ target }) {
    const { name, value } = target
      setFilterByToEdit(prevFilterBy => ({ ...prevFilterBy, [name]: value }))
  }

  const { txt, minSeverity } = filterByToEdit

  return (
    <React.Fragment>
      <form onSubmit={handleSubmit} className="filter-options flex flex-row align-center">
          <input
            onChange={handleChange}
            value={txt}
            name="txt"
            type="text"
            placeholder="Search Bug..."
            />
          <select name="minSeverity" onChange={handleChange} value={minSeverity}>
            <option value="">Min Severity...</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>

          <button>Filter</button>
      </form>
  </React.Fragment>
  )
}
