// models/Produit.js
const mongoose = require('mongoose');

const produitSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String },
  price: { type: Number, required: true },
});

const Produit = mongoose.model('Produit', produitSchema);

module.exports = Produit;
