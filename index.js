// index.js
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const userController = require('./Controllers/userController');
const DatabaseConnection = require('./Config/DatabaseConnection');


const app = express();

var corsOptions = {
  origin: 'https://localhost:8080',
};

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.json({ message: 'Welcome! Your API is Working Fine!' });
});

// Use the user controller for CRUD operations
app.use('/', userController);

const PORT = process.env.PORT || 8081;

const databaseConnection = new DatabaseConnection();

databaseConnection.connect().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running at Port: ${PORT}`);
  });
}).catch((error) => {
  console.error('Error connecting to the database:', error);
});
