const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.send('Hello World!'))

app.get('/user/:name', (req, res) => {
  res.send("nama user adalah " + req.params.name)
})

app.get('/user/:name/:umur', (req, res) => {
  res.send("nama user adalah " + req.params.name + " umurnya adalah " + req.params.umur)
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
