const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const todoController = require('./controllers/todoController');

const app = express();
const PORT = 3000;
app.set('view engine', 'ejs');

// add parsers
const urlencodedParser = bodyParser.urlencoded({ extended: true });
const jsonParser = bodyParser.json();
app.use(urlencodedParser);
app.use(jsonParser);

// root path redirect to todo page
app.get('/', (req, res, next) => {
  res.redirect('/todo');
});

// set todoController
todoController(app);

app.use('/static', express.static(path.resolve('./public')));

app.listen(PORT, () => {
  console.log(`Server starts at http://localhost:${PORT}`);
});
