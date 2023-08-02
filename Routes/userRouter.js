const userConteroller =  require('../Controllers/userController')

const router = require('express').Router()


router.post('/addUser', userConteroller.AddUser)


router.get('/getUsers', userConteroller.getAllUsers)
