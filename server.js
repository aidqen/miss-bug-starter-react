import express from 'express'
import { bugService } from './services/bug.service.js'
import cookieParser from 'cookie-parser'

const app = express()

app.use(express.static('public'))
app.use(cookieParser())
app.use(express.json())

app.get('/', (req, res) => res.send('Hello there'))
app.listen(3030, () =>
  console.log('Server ready at port http://127.0.0.1:3030')
)

app.get('/api/bug', (req, res) => {
  if (req.query.bugId) {
    const bugId = req.query.bugId

    var visitedBugs = req.cookies.visitedBugs || []
    console.log(req.cookies.visitedBugs)

    if (visitedBugs.length >= 3)
      return res.status(401).send('You have already visited 3 bugs.')

    if (!visitedBugs.includes(bugId)) visitedBugs.push(bugId)
    res.cookie('visitedBugs', visitedBugs, { maxAge: 10000 })

    return bugService
      .getById(bugId)
      .then(bug => res.send(bug))
      .catch(err => {
        res.status(500).send('error')
        throw err
      })
  }

  const { txt, minSeverity } = req.query
  const filterBy = {
    txt,
    minSeverity: +minSeverity,
  }
  bugService.query(filterBy).then(bugs => res.send(bugs))
})

app.post('/api/bug', (req, res) => {
  console.log(req.body);
  const { _id, title, description, severity, createdAt } = req.body
  const bugToSave = {
    _id,
    title,
    description,
    severity,
    createdAt,
  }
  console.log(bugToSave);
  bugService.save(bugToSave).then(savedBug => res.send(savedBug))
})

app.delete('/api/bug', (req, res) => {
    const bugId = req.query.bugId
    console.log(bugId);
  
  bugService.remove(bugId).then(() => res.send(`Bug ${bugId} deleted`))
})
