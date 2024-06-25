
export function BugFilter({ filterBy, setFilterBy, pageCount }) {


  function handleChange({ target }) {
    const { name, value, checked } = target
    if (name === 'type') {
      setFilterBy(prevFilterBy => ({...prevFilterBy, sortBy: { ...prevFilterBy.sortBy, [name]: value }}))
    } else if (name === 'direction') {
      setFilterBy(prevFilterBy => ({...prevFilterBy, sortBy: { ...prevFilterBy.sortBy, [name]: checked ? 1 : -1 }}))
    } else {
      setFilterBy(prevFilterBy => ({ ...prevFilterBy, [name]: value }))
    }
  }

  function onChangePage(diff) {
    
    const { pageIdx } = filterBy
    if (pageIdx + diff < 0) return
    if (diff === 1) {
      if (pageIdx === pageCount) return
    }
     const currPage = pageIdx + diff
     
     setFilterBy(prevFilterBy => ({...prevFilterBy, pageIdx: currPage}))
  }

  const { txt, minSeverity, sortBy } = filterBy

  return (
    <section className="filter-container flex flex-column">
      <div className="filter-options flex flex-row mx-1.5">
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
            Descending:
            <input type="checkbox" name="direction"   onChange={handleChange}/>
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
