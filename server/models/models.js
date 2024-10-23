const mongoose = require('./');
const Schema = mongoose.Schema;

const BingoBoxSchema = new Schema({
  TaskNum: {type: Number, required: true},
  TaskName: {type: String, required: true},
  RedTeamComplete: {type: Boolean, required: true},
  BlueTeamComplete: {type: Boolean, required: true},
  RedTeamMember: {type: String, required: false},
  BlueTeamMember: {type: String, required: false},
  RedTeamPicture: {type: String, required: false},
  BlueTeamPicture: {type: String, required: false},
  RedTeamTime: {type: Date, required: false},
  BlueTeamTime: {type: Date, required: false},
})

const UserSchema = new Schema({
  Name: {type: String, required: true},
  Team: {type: String, required: true},
  IP: {type: String, required: true},
});

const DenialSchema = new Schema({
  Name: {type: String, required: true},
  TaskNum: {type: Number, required: true},
  Reason: {type: String, required: true},
  Time: {type: Date, required: true},
});


module.exports = {
  BingoBox: mongoose.model('BingoBox', BingoBoxSchema),
  User: mongoose.model('User', UserSchema),
  Denial: mongoose.model('Denial', DenialSchema),
}