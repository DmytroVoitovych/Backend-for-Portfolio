const express = require('express');
const logger = require('morgan');
const cors = require('cors');

const dotenv = require('dotenv');
dotenv.config();

const sendMessage = require('./routes/api/users');// пути к роутам

const app = express();

const formatsLogger = app.get('env') === 'development' ? 'dev' : 'short';

app.use(logger(formatsLogger));
app.use(cors()); 
app.use(express.json());


app.use('/api', sendMessage); //роутер для работы с логинизацией


app.use((req, res) => {
  res.status(404).json({ message: 'Not found' })
});

app.use((err, req, res, next) => {
  const { status=500, message='Server error' } = err;
  res.status(status).json({status: 'failed', code: status, message, })
});

module.exports = app;
