const express = require('express');
const router = express.Router();
const Bingo = require('./controllers/bingoController');
const User = require('./controllers/userController');
const Denial = require('./controllers/denialController');

router.get('/bingo', (req, res) => {
  Bingo.get(req, res);
});

router.patch('/bingo', (req, res) => {
  Bingo.patch(req, res);
});

router.get('/user', (req, res) => {
  User.get(req, res);
});

router.post('/user', (req, res) => {
  User.post(req, res);
});

router.delete('/user', (req, res) => {
  User.delete(req, res);
});

router.get('/denial', (req, res) => {
  Denial.get(req, res);
});

router.post('/denial', (req, res) => {
  Denial.post(req, res);
});

module.exports = router;