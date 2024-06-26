
export function BugFilter({ filterBy, handleChange }) {

  const { txt, minSeverity } = filterBy

  return (
    <React.Fragment>
      <div className="filter-options flex flex-row flex-center">
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
      </div>
  </React.Fragment>
  )
}
