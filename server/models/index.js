const mongoose = require('mongoose');

const URL = 'mongodb://127.0.0.1:27017/server';

async function main() {
  await mongoose.connect(URL)
  .then(() => console.log('Connected to MongoDB'))
}

main();
module.exports = mongoose;