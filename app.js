const path = require('path');
const express = require('express')
const { engine } = require('express-handlebars')
const app = express()
const port = 3000


app.use(express.static(path.join(__dirname, 'public')));

app.all('/', (req, res) => {
  res.sendFile('index.html');
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

module.exports = app