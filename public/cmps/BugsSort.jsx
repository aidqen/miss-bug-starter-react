export function BugsSort({ filterBy, setFilterBy, handleChange }) {
  const { sortBy } = filterBy



  return (
    <div className="sorting-container flex flex-row">
      <div className="sorting-options">
        <label>
          Title:
          <input
            type="radio"
            name="type"
            value={'title'}
            checked={sortBy.type === 'title'}
            onChange={handleChange}
          />
        </label>
        <label>
          Severity:
          <input
            type="radio"
            name="type"
            value={'severity'}
            checked={sortBy.type === 'severity'}
            onChange={handleChange}
          />
        </label>
        <label>
          Created At:
          <input
            type="radio"
            name="type"
            value={'createdAt'}
            checked={sortBy.type === 'createdAt'}
            onChange={handleChange}
          />
        </label>
      </div>

      <div className="sorting-dir">
        <input type="checkbox" name="direction" onChange={handleChange} />
      </div>
    </div>
  )
}
