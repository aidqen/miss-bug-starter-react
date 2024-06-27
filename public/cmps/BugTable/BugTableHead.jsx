import { SortDirPopdown } from "./SortDirPopdown.jsx"

const { useState } = React
export function BugTableHead({ filterBy, handleChange }) {


  const [sortMenuToggle, setSortMenuToggle] = useState({
    title: false,
    severity: false,
    description: false,
    date: false,
    id: false,
  })

  function toggleSortMenu(sortBy) {
    setSortMenuToggle(prevState => ({
      ...{title: false, severity: false, description: false, date: false, id: false}, // Reset all to false
      [sortBy]: !prevState[sortBy] // Toggle the clicked label
    }));
  }

  const ctgs = ['title', 'severity', 'description', 'date', 'id']

  return (
    <thead>
      <tr>
        {ctgs.map(ctg => {
          return (
            <th onClick={() => toggleSortMenu(ctg)} key={ctg}>
              {ctg}
              <i
                className={`fa-solid ${
                  sortMenuToggle[ctg] ? 'fa-chevron-up' : 'fa-chevron-down'
                } `}
              ></i>
              {sortMenuToggle[ctg] && 
              <SortDirPopdown handleChange={handleChange} ctg={ctg}/>}
            </th>
          )
        })}
        <th></th>
      </tr>
    </thead>
  )
}
