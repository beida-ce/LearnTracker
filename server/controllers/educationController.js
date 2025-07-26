const Education = require('../models/education.js');

// Tüm eğitimleri getir
const getAllEducations = async (req, res) => {
  try {
    const educations = await Education.find();
    res.json(educations);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Yeni eğitim oluştur
const createEducation = async (req, res) => {
  const { title, notes } = req.body;

  const education = new Education({ title, notes });

  try {
    const saved = await education.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Eğitimi güncelle
const updateEducation = async (req, res) => {
  const { id } = req.params;
  const { title, notes, completed } = req.body;

  try {
    const updated = await Education.findByIdAndUpdate(
      id,
      { title, notes, completed },
      { new: true }
    );
    res.json(updated);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Eğitimi sil
const deleteEducation = async (req, res) => {
  const { id } = req.params;

  try {
    await Education.findByIdAndDelete(id);
    res.json({ message: 'Education deleted' });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

module.exports = {
  getAllEducations,
  createEducation,
  updateEducation,
  deleteEducation,
};
