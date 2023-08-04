const Group = require('../Models/Group'); // Assuming you have the Group model defined
const { v4: uuidv4 } = require('uuid');
// Create a new group
const createGroup = async (req, res) => {
  try {
    const {  userId, localId, groupName, groupColorId, groupIconId, isDeleted } = req.body;
    const group = await Group.create({
     id: uuidv4(),
      userId,
      localId,
      groupName,
      groupColorId,
      groupIconId,
      isDeleted,
    });
    res.status(201).json({ success: true, data: group });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// Get all groups
const getAllGroups = async (req, res) => {
  try {
    const groups = await Group.findAll();
    res.status(200).json({ success: true, data: groups });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// Get a single group by ID
const getGroupById = async (req, res) => {
  const  {id}  = req.params;
  try {
    const group = await Group.findByPk(id);
    if (!group) {
      return res.status(404).json({ success: false, error: 'Group not found' });
    }
    res.status(200).json({ success: true, data: group });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// Update a group by ID
const updateGroup = async (req, res) => {
  const { id } = req.params;
  try {
    const group = await Group.findByPk(id);
    if (!group) {
      return res.status(404).json({ success: false, error: 'Group not found' });
    }
    const { userId, localId, groupName, groupColorId, groupIconId, isDeleted } = req.body;
    await group.update({
      userId,
      localId,
      groupName,
      groupColorId,
      groupIconId,
      isDeleted,
    });
    res.status(200).json({ success: true, data: group });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// Delete a group by ID
const deleteGroup = async (req, res) => {
  const { groupId } = req.params;
  try {
    const group = await Group.findByPk(groupId);
    if (!group) {
      return res.status(404).json({ success: false, error: 'Group not found' });
    }
    await group.destroy();
    res.status(200).json({ success: true, data: {} });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

module.exports = {
  createGroup,
  getAllGroups,
  getGroupById,
  updateGroup,
  deleteGroup,
};
