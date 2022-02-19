const router = require('express').Router();

const {
  createTodo,
  getId,
  getAll,
  updateTodo,
  deleteTodo,
} = require('../controllers/Todo.controllers');

router.post('/todos', createTodo);

router.get('/todos', getAll);
router.get('/todo/:id', getId);

router.put('/todo/:id', updateTodo);

router.delete('/todo/:id', deleteTodo);

module.exports = router;
