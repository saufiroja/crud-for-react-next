const createError = require('http-errors');

const { Todo } = require('../db/models');

// POST
const createTodo = async (req, res, next) => {
  try {
    const { title, description } = req.body;

    const todo = await Todo.create({
      title,
      description,
    });

    return res.status(201).json({
      message: 'todo created',
      todo,
    });
  } catch (error) {
    next(error);
  }
};

// GET ALL
const getAll = async (req, res, next) => {
  try {
    const todos = await Todo.findAll();

    if (!todos) {
      return next(createError(404, 'todos not found'));
    }

    return res.status(200).json({
      message: 'todos retrieved',
      todos,
    });
  } catch (error) {
    next(error);
  }
};

// GET ID
const getId = async (req, res, next) => {
  try {
    const { id } = req.params;

    const todo = await Todo.findOne({
      where: { id },
    });

    if (!todo) {
      return next(createError(404, 'todo not found'));
    }

    return res.status(200).json({
      message: 'todo retrieved',
      todo,
    });
  } catch (error) {
    next(error);
  }
};

// UPDATE
const updateTodo = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { title, description, published } = req.body;

    const todo = await Todo.findOne({
      where: { id },
    });

    if (!todo) {
      return next(createError(404, 'todo not found'));
    }

    await todo.update({
      title,
      description,
      published,
    });

    return res.status(201).json({
      message: 'todo updated',
      todo,
    });
  } catch (error) {
    next(error);
  }
};

// DELETE
const deleteTodo = async (req, res, next) => {
  try {
    const { id } = req.params;

    const todo = await Todo.findOne({
      where: { id },
    });

    if (!todo) {
      return next(createError(404, 'todo not found'));
    }

    await todo.destroy();

    return res.status(200).json({
      message: 'user deleted',
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createTodo,
  getAll,
  getId,
  updateTodo,
  deleteTodo,
};
