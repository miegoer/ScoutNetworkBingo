const { Denial } = require('../models/models');

exports.get = async (req, res) => {
  try {
  const denial = await Denial.find();
  res.send(denial);
  } catch (err) {
    res.status(500).send(err);
  }
};

exports.post = async (req, res) => {
  try {
    const denial = await Denial.create(req.body);
    res.send(denial);
  } catch (err) {
    res.status(500).send(err);
  }
};