const path = require('path');
const express = require('express')
const { engine } = require('express-handlebars')
const app = express()
const port = 3000


app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');

app.use(express.static(path.join(__dirname, 'public')));

app.all('/', (req, res) => {
  res.render('index', { title: "Dashboard" });
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

module.exports = app