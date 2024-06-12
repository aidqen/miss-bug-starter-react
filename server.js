import express from 'express'
import { bugService } from './services/bug.service.js'

const app = express()

app.get('/', (req, res) => res.send('Hello there'))
app.listen(3030, () => console.log('Server ready at port 3030'))

app.get('/api/bug', (req, res) => {
  bugService.query().then(cars => res.send(cars))
})
app.get('/api/bug/save', (req, res) => {
  res.send('<h1>Res</h1>')
})
app.get('/api/bug/:bugId', (req, res) => {
  const { bugId } = req.params
  console.log(bugId)
  bugService.getById(bugId).then(bug => res.send(bug))
})
app.get('/api/bug/:bugId/remove', (req, res) => {
  const { bugId } = req.params
  bugService.remove(bugId)
            .then(() => res.send(`Bug ${bugId} deleted`))
})
