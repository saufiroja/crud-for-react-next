require('dotenv').config();

const expres = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');

const app = expres();

const { PORT } = process.env;

require('./db/models/sequelize');

const corsOptions = {
  origin: 'http://localhost:3000',
  credentials: true, //access-control-allow-credentials:true
};

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors(corsOptions));

const todoRouter = require('./routers/todo.routers');

app.use('/api', todoRouter);

app.use((err, req, res, next) => {
  return res.status(err.status || 500).json({
    message: err.message || 'internal server error',
    error: err,
  });
});

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
