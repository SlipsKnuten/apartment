const mongoose = require('mongoose');

const ApartmentSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  pricePerMonth: { type: Number, required: true },
  availabilityLength: { type: Number, required: true },
  location: { type: String, required: true },
  pictures: { type: [String], required: false },
  amenities: { type: [String], required: false },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Apartment', ApartmentSchema);
