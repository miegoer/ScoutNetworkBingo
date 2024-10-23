const { BingoBox } = require('../models/models');

exports.get = async (req, res) => {
  try {
  const bingoBox = await BingoBox.find();
  res.send(bingoBox);
  } catch (err) {
    res.status(500).send(err);
  }
};

exports.patch = async (req, res) => {
  try {
    const bingoBox = await BingoBox.updateOne({ TaskNum: req.body.TaskNum }, req.body);
    res.send(bingoBox);
  } catch (err) {
    res.status(500).send(err);
  }
};

exports.get = async (req, res) => {
  try {
  const bingoBox = await BingoBox.find();
  res.send(bingoBox);
  } catch (err) {
    res.status(500).send(err);
  }
}