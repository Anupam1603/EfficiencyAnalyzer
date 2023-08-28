const express = require('express');
const app = express();

// Middleware setup (if needed)
app.use(express.json()); // Parse JSON bodies

// Route setup
const arrayRoutes = require('./Routes/ArrayRoute');
const binaryTreeRoutes = require('./Routes/BTRoute');
const graphRoutes = require('./Routes/GraphRoute');
const linkedListRoutes = require('./Routes/LLRoute');

app.use('/array', arrayRoutes);
app.use('/binary-tree', binaryTreeRoutes);
app.use('/graph', graphRoutes);
app.use('/linked-list', linkedListRoutes);

// Error handling middleware (if needed)
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});

module.exports = app;
