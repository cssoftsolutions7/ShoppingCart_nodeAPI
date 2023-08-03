const express = require('express');
const cors = require('cors');
// const dbPool = require('./Config/dbPool'); // Import the dbPool file
const { testConnection } = require('./Config/dbPool');
const userRouter = require('./Routes/userRouter'); 
const app = express();



// const UserRoutes = require("./Routes/userRouter");

var corsOptions = {
  origin: 'https://localhost:8080',
};

// Middleware
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Testing
app.get('/', (req, res) => {
  res.json({ message: 'Welcome! Your API is Working Fine!' });
});


// Test the database connection
const PORT = process.env.PORT || 8081;
testConnection()
  .then(() => {
    // Start the server after the database connection is established
    app.listen(PORT, () => {
      console.log(`Server is Running at Port : ${PORT}`);
    });
  })
  .catch((error) => {
    console.error('Error starting the server:', error);
  });

app.use('/api', userRouter);
// Port
// const PORT = process.env.PORT || 8081;

// Server
// app.listen(PORT, () => {
//   console.log(`Server is Running at Port : ${PORT}`);
// });
