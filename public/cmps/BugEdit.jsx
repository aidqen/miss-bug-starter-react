//Can you make an export function that will have 3 labels and inputs for the user to add a new bug?
const { useParams, Link } = ReactRouterDOM
const { useState, useEffect } = React
import { bugService } from "../services/bugService.js";

export function BugEdit({ onAddBug, onEditBug, formState }) {
  const [newBug, setNewBug] = useState({
    title: '',
    severity: 0,
    description: '',
  })
  const isAddBug = formState === 'addBug'

  const params = useParams()
  const bugId = params.bugId

  useEffect(() => {
    if (bugId) {
      bugService.getById(bugId).then(bug => {
        console.log(bug);
        setNewBug({title: bug.title, severity: bug.severity, description: bug.description})
      })
    }
  }, [])
  

  function onAddBug(data) {
    bugService
      .save(data, user)
      .then(savedBug => {
        console.log('Added Bug', savedBug)
        loadBugs()
        showSuccessMsg('Bug added')
      })
      .catch(err => {
        console.log('Error from onAddBug ->', err)
        showErrorMsg('Cannot add bug')
      })
  }

  function onEditBug(bug) {
    // const severity = +prompt('New severity?')
    // const bugToSave = { ...bug, severity }
    // bugService
    const bugToSave = { ...bug, ...newBug }
    bugService
      .save(bugToSave, user)
      .then(savedBug => {
        console.log('Updated Bug:', savedBug)
        setBugs(prevBugs =>
          prevBugs.map(currBug =>
            currBug._id === savedBug._id ? savedBug : currBug
          )
        )
        showSuccessMsg('Bug updated')
      })
      .catch(err => {
        console.log('Error from onEditBug ->', err)
        showErrorMsg('Cannot update bug')
      })
  }

  function handleSubmit(ev) {
    ev.preventDefault()
    isAddBug ? onAddBug(newBug) : onEditBug(newBug)
    setNewBug({ title: '', severity: 0, description: '' })
  }

  function handleChange({ target }) {
    const { name, value } = target
    setNewBug(prevNewBug => ({ ...prevNewBug, [name]: value }))
  }
  return (
    <React.Fragment>
      <div className="backdrop"></div>
      <form onSubmit={handleSubmit} className="bug-edit">
        <Link to="/bug">X</Link>
        <label htmlFor="title">Title:</label>
        <input type="text" id="title" value={newBug.title} onChange={handleChange}/>
        <label htmlFor="severity">Severity:</label>
        <input type="number" id="severity" value={newBug.severity} onChange={handleChange}/>
        <label htmlFor="description">Description:</label>
        <textarea type="text" id="description" value={newBug.description} onChange={handleChange}/>
        <button>Add Bug</button>
      </form>
    </React.Fragment>
  )
}
