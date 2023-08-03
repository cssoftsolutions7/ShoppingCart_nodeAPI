// const userConteroller =  require('../Controllers/userController')

// const router = require('express').Router()


// router.post('/addUser', userConteroller.AddUser)


// router.get('/getUsers', userConteroller.getAllUsers)



// const express = require('express');
// const userController = require('../Controllers/userController'); // Import the userController module

// const router = express.Router();

// // Define the endpoints
// router.get('/users', userController.get);
// // router.get('/users/:id', userController.getUserById);
// router.post('/users', userController.post);
// router.put('/users/:id', userController.put);
// router.delete('/users/:id', userController.delete);

// module.exports = router;




const express = require('express');
const userController = require('../Controllers/userController');

const router = express.Router();

router.get('/users', userController.getAllUsers);
// router.get('/users/:id', userController.getUserById);
router.post('/users', userController.createUser);
router.put('/users/:id', userController.updateUser);
router.delete('/users/:id', userController.deleteUser);

module.exports = router;






