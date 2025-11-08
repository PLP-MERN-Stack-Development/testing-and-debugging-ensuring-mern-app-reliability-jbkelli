const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const errorHandler = require('./middleware/errorHandler');
const postRoutes = require('./routes/posts');
const userRoutes = require('./routes/users');

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

app.get('/', (req, res) => {
  res.json({ message: 'MERN Testing API' });
});

app.use('/api/posts', postRoutes);
app.use('/api/users', userRoutes);

app.use(errorHandler);

module.exports = app;
