const mongoose = require('mongoose');
const { getRandomId } = require('../util');

// connect
mongoose.connect('mongodb://localhost:27017/todoDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const todoSchema = new mongoose.Schema({
  id: String,
  content: String
},{});
const TodoModel = mongoose.model('Todo', todoSchema);

function todoController(app) {
  // get todo, render todo page
  app.get('/todo', (req, res, next) => {
    TodoModel.find({}, (err, docs) => {
      if (err) throw err;
      res.render('todo', { list: docs });
    });
  });

  // add todo
  app.post('/api/todo/add', (req, res, next) => {
    const id = getRandomId();
    const { content } = req.body;
    TodoModel.create({ id, content }, (err, doc) => {
      if (err) throw err;
      res.json({ msg: 'add success' });
    });
  });

  // delete todo
  app.delete('/api/todo/:id', (req, res, next) => {
    const id = req.params.id;
    TodoModel.deleteOne({ id }, (err, result) => {
      if (err) throw err;
      res.json({ msg: 'delete success' });
    });
  });
}

module.exports = todoController;
