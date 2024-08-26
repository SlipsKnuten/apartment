const express = require('express');
const router = express.Router();
const Apartment = require('../models/Apartment');

// Get all apartments
router.get('/', async (req, res) => {
  try {
    const apartments = await Apartment.find();
    res.json(apartments);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get one apartment
router.get('/:id', async (req, res) => {
  try {
    const apartment = await Apartment.findById(req.params.id);
    res.json(apartment);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Admin: Create an apartment
router.post('/', async (req, res) => {
  const apartment = new Apartment(req.body);
  try {
    const newApartment = await apartment.save();
    res.status(201).json(newApartment);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Admin: Update an apartment
router.put('/:id', async (req, res) => {
  try {
    const updatedApartment = await Apartment.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedApartment);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Admin: Delete an apartment
router.delete('/:id', async (req, res) => {
  try {
    await Apartment.findByIdAndDelete(req.params.id);
    res.status(204).json({ message: 'Apartment deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
