import express from 'express'

const app = express()

app.get('/', (req, res) => res.send('Hello there'))
app.listen(3030, () => console.log('Server ready at port 3030'))

app.get('/api/bug', (req, res) => {
    res.send('hi')
})
app.get('/api/bug/save', (req, res) => {
    res.send('<h1>Res</h1>')
})
app.get('/api/bug/:bugId', (req, res) => {})
app.get('/api/bug/:bugId/remove', (req, res) => {})