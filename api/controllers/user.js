const User = require('../models/user');

function signUp(req, res) {
  let {
    displayName,
    email,
  } = req.body;

  User.create({
    displayName,
    email,
  }).then((user) => {
    return res.status(201).json({
      message: "User created successfully",
      user,
    }).catch(err => {
      res.status(400).json({
        error: err.message,
      });
    });
  }).catch((err) => {
    res.status(500).json({
      error: err.message,
    });
  });
}

function updateSignUp(req, res) {
  let {
    displayName,
    email,
  } = req.body;
  let id = req.params.id;

  User.findOne({
    where: { id },
  }).then((user) => {
    if (user) {
      user.update({ displayName, email }).then((updateUser) => { 
        return res.status(202).json({
          message: "User updated successfully",
          user: updateUser,
        });
      });
    } else {
      return res.status(206).json({
        message: "User not found",
      });
    }
  }).catch((err) => {
    res.status(500).json({
      error: err.message,
    });
  });
}

function getAllUsers(req, res) {
  User.findAll({
    attributes: ['id', 'displayName', 'email'],
    order: [['id', 'DESC']],
  }).then((users) => {
    return res.status(200).json({
      users,
    });
  }).catch((err) => {
    res.status(500).json({
      error: err.message,
    });
  });
}

function getUserById(req, res) {
  let id = req.params.id;

  User.findOne({
    where: { id },
    attributes: ['id', 'displayName', 'email'],
  }).then((user) => {
    if (user) {
      return res.status(200).json({
        user,
      });
    } else {
      return res.status(206).json({
        message: "User not found",
      });
    }
  }).catch((err) => {
    res.status(500).json({
      error: err.message,
    });
  });
}

function deleteUserById(req, res) {
  let id = req.params.id;

  User.destroy({
    where: { id },
  }).then(() => {
    return res.status(200).json({
      message: "User deleted successfully",
    });
  }).catch((err) => {
    res.status(500).json({
      error: err.message,
    });
  });
}

module.exports = {
  signUp,
  updateSignUp,
  getAllUsers,
  getUserById,
  deleteUserById,
};
