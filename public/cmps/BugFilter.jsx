// const { useState, useEffect, useRef } = React

export function BugFilter({ filterBy, setFilterBy }) {


  function handleChange({ target }) {
    const { name, value } = target
    if (name === 'type' || name === 'direction') {
      setFilterBy(prevFilterBy => ({...prevFilterBy, sortBy: { ...prevFilterBy.sortBy, [name]: value }}))
    } else {
      setFilterBy(prevFilterBy => ({ ...prevFilterBy, [name]: value }))
    }
  }

  function onChangePage(diff) {
    const { pageIdx } = filterBy
    if (pageIdx <= 0) return
     const currPage = pageIdx + diff
     setFilterBy(prevFilterBy => ({...prevFilterBy, pageIdx: currPage}))
  }

  const { txt, minSeverity, sortBy } = filterBy

  return (
    <section className="filter-container flex flex-column">
      <div className="filter-options flex flex-row">
        <label>
          Text:
          <input
            onChange={handleChange}
            value={txt}
            name="txt"
            type="text"
            placeholder="Search Bug..."
          />
        </label>
        <label>
          Severity:
          <input
            onChange={handleChange}
            value={minSeverity}
            name="minSeverity"
            type="number"
            placeholder="Min Severity..."
          />
        </label>
      </div>
      <h2>Sorting:</h2>
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
          <label>
            1
            <input
              type="radio"
              name="direction"
              value={1}
              checked={sortBy.direction === '1'}
              onChange={handleChange}
            />
          </label>
          <label>
            -1
            <input
              type="radio"
              name="direction"
              value={-1}
              checked={sortBy.direction === '-1'}
              onChange={handleChange}
            />
          </label>
        </div>
      </div>
      <div className="pagination flex flex-row">
        <div onClick={() => onChangePage(-1)}>-</div>
        <div>{filterBy.pageIdx}</div>
        <div onClick={() => onChangePage(1)}>+</div>
      </div>
    </section>
  )
}
