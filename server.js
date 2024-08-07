import path from 'path'
import express from 'express'
import { bugService } from './services/bug.service.js'
import cookieParser from 'cookie-parser'
import { userService } from './services/user.service.js'

const app = express()

app.use(express.static('public'))
app.use(cookieParser())
app.use(express.json())

app.get('/', (req, res) => res.send('Hello there'))
app.listen(3031, () =>
  console.log('Server ready at port http://127.0.0.1:3031')
)

app.get('/api/bug', (req, res) => {
  const { txt, minSeverity, sortBy, pageIdx, folder, userId } = req.query
  const filterBy = {
    txt,
    minSeverity: +minSeverity,
    sortBy,
    pageIdx,
    folder,
    userId
  }
  bugService.query(filterBy).then(bugs => res.send(bugs))
})

app.get('/api/bug/bugListInfo', (req, res) => {
  const { txt, minSeverity, sortBy, folder, userId } = req.query
  const filterBy = {
    txt,
    minSeverity: +minSeverity,
    sortBy,
    pageIdx: false,
    folder,
    userId
  }
  bugService.getBugListInfo(filterBy).then(response => res.send(response))
})

app.post('/api/bug', (req, res) => {
  const { _id, title, description, severity, createdAt, owner, user } = req.body
  if (!user) return
  if (owner && owner._id !== user._id) {
    return res.status(401).send('You are not allowed to edit this bug')
  }
  const bugToSave = {
    _id,
    title,
    description,
    severity,
    createdAt,
    owner: { _id: user._id, fullname: user.fullname, isAdmin: user.isAdmin ? true : false},
  }
  bugService.save(bugToSave).then(savedBug => res.send(savedBug))
})


app.get('/api/bug/:bugId', (req, res) => {
  const { bugId } = req.params

  var visitedBugs = req.cookies.visitedBugs || []

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
})

app.delete('/api/bug/:bugId', (req, res) => {
  const token = req.cookies.loginToken
  const loggedInUser = userService.validateToken(token)
  const { bugId } = req.params

  bugService.remove(bugId, loggedInUser).then(() => res.send(`Bug ${bugId} deleted`))  
})

app.get('/**', (req, res) => {
  res.sendFile(path.resolve('public/index.html'))
})

app.post('/api/auth/login', (req, res) => {
  const { password, username } = req.body
  const credentials = { password, username }

  userService.checkLogin(credentials).then(user => {
    console.log('user:', user)
    if (user) {
      const loginToken = userService.getLoginToken(user)
      res.cookie('loginToken', loginToken)
      res.send(user)
    } else {
      res.status(401).send('Invalid login')
    }
  })
})

app.post('/api/auth/signup', (req, res) => {

  const { password, username, fullname } = req.body
  const credentials = { password, username, fullname }

  userService.save(credentials)
    .then(user => {
      const loginToken = userService.getLoginToken(user)
      res.cookie('loginToken', loginToken)
      res.send(user)
    })
})

app.post('/api/auth/logout', (req, res) => {
  res.clearCookie('loginToken')
  res.send('Logged out')
})