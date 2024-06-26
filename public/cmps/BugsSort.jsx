export function BugsSort({ filterBy, setFilterBy, handleChange }) {
  const { sortBy } = filterBy

  return (
    <div className="sorting-container ">
      <div className="sorting-options flex flex-row align-center">
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
        <label>
          Ascending:
          <input type="checkbox" name="direction" onChange={handleChange} checked={sortBy.direction === 1 ? true : false} />
        </label>
      </div>
    </div>
  )
}
