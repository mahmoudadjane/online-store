// models/Client.js
const mongoose = require('mongoose');

const clientSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String },
});

const Client = mongoose.model('Client', clientSchema);

module.exports = Client;
