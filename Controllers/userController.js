// usercontroller.js
const express = require('express');
const router = express.Router();
const { v4: uuidv4 } = require('uuid');
const User = require('../models/User');

// CREATE (POST)
router.post('/users', async (req, res) => {
  try {
    const { nickname, profileImage, email, birthday, gender, deviceToken, loginType, userState, withdrawReason,createdAt,updatedAt } = req.body;

    const newUser = await User.create({
      id: uuidv4(), // Generate a unique ID
      nickname,
      profileImage,
      email,
      birthday,
      gender,
      deviceToken,
      loginType,
      userState,
      withdrawReason,
      createdAt,
      updatedAt,
    });

    res.status(201).json(newUser);
  } catch (error) {
    console.error('Error creating user:', error);
    res.status(500).json({ error: 'Could not create user.' });
  }
});

// READ (GET)
router.get('/users', async (req, res) => {
  try {
    const users = await User.findAll();
    res.json(users);
  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).json({ error: 'Could not fetch users.' });
  }
});

// UPDATE (PUT)
router.put('/users/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { nickName, profileImage, email, birthday, gender, deviceToken, loginType, userState, withdrawReason,createdAt,updatedAt } = req.body;

    const user = await User.findByPk(id);
    if (!user) {
      return res.status(404).json({ error: 'User not found.' });
    }

    await user.update({
      nickName,
      profileImage,
      email,
      birthday,
      gender,
      deviceToken,
      loginType,
      userState,
      withdrawReason,
      createdAt,
      updatedAt,
    });

    res.json(user);
  } catch (error) {
    console.error('Error updating user:', error);
    res.status(500).json({ error: 'Could not update user.' });
  }
});

// DELETE
router.delete('/users/:id', async (req, res) => {
  try {
    const { id } = req.params;

    const user = await User.findByPk(id);
    if (!user) {
      return res.status(404).json({ error: 'User not found.' });
    }

    await user.destroy();

    res.json({ message: 'User deleted successfully.' });
  } catch (error) {
    console.error('Error deleting user:', error);
    res.status(500).json({ error: 'Could not delete user.' });
  }
});

module.exports = router;
