// models/Commande.js
const mongoose = require('mongoose');

const commandeSchema = new mongoose.Schema({
  orderNumber: { type: String, required: true },
  date: { type: Date, default: Date.now },
  total: { type: Number, required: true },
});

const Commande = mongoose.model('Commande', commandeSchema);

module.exports = Commande;
