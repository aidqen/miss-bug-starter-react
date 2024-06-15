// const { useState, useEffect, useRef } = React

export function BugFilter({ filterBy, setFilterBy }) {

  function handleChange({ target }) {
    const { name, value } = target
    setFilterBy(prevFilterBy => ({ ...prevFilterBy, [name]: value }))
  }

  const { txt, minSeverity } = filterBy

  return (
    <section className=" flex flex-row">
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
    </section>
  )
}
