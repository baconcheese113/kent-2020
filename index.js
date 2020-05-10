const express = require('express')
const app = express()
const path = require('path')
const PORT = 8080

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'))
})
app.get('/about', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'about.html'))
})

app.listen(process.env.PORT || PORT, '0.0.0.0')
console.log(`listening on 0.0.0.0:${process.env.PORT || PORT}`)