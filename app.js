const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;
app.set('view engine', 'ejs');

// add parsers
const urlencodedParser = bodyParser.urlencoded({ extended: true });
const jsonParser = bodyParser.json();
app.use(urlencodedParser);
app.use(jsonParser);

const data = [
  { id: 1, content: 'buy flowers' },
  { id: 2, content: 'drink coffee' },
  { id: 3, content: 'fix code bugs' },
];
app.get('/todo', (req, res, next) => {
  res.render('todo', { list: data });
});

app.use('/static', express.static(path.resolve('./public')));

app.listen(PORT, () => {
  console.log(`Server starts at http://localhost:${PORT}`);
});
