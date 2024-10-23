const { User } = require('../models/models');

exports.get = async (req, res) => {
  try {
  const user = await User.find();
  res.send(user);
  } catch (err) {
    res.status(500).send(err);
  }
};

exports.post = async (req, res) => {
  try {
    const user = await user.create(req.body);
    res.send(user);
  } catch (err) {
    res.status(500).send(err);
  }
};