import express from 'express'
import { bugService } from './services/bug.service.js'

const app = express()

app.use(express.static('public'))

app.get('/', (req, res) => res.send('Hello there'))
app.listen(3030, () => console.log('Server ready at port http://127.0.0.1:3030'))

app.get('/api/bug', (req, res) => {
  bugService.query()
       .then(bugs => res.send(bugs))
})

app.get('/api/bug/save', (req, res) => {
  const {_id, title, description, severity, createdAt} = req.query
  const bugToSave = {
    _id,
    title,
    description,
    severity,
    createdAt
  }
  bugService.save(bugToSave)
        .then(savedBug => res.send(savedBug))
})

app.get('/api/bug/:bugId/remove', (req, res) => {
  const { bugId } = req.params
  bugService.remove(bugId)
  .then(() => res.send(`Bug ${bugId} deleted`))
  })
  
  app.get('/api/bug/:bugId', (req, res) => {
    const { bugId } = req.params
    console.log(bugId)
    bugService.getById(bugId)
          .then(bug => res.send(bug))
  })