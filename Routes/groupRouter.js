const express = require('express');
const groupController = require('../Controllers/groupController');

const router = express.Router();

router.get('/group', groupController.getAllGroups);
router.get('/group/:id', groupController.getGroupById);
router.post('/Group', groupController.createGroup);
router.put('/Group/:id', groupController.updateGroup);
router.delete('/Group/:id', groupController.deleteGroup);

module.exports = router;