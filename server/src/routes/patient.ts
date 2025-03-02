import express from 'express';
import Patient from '../models/Patient';

const router = express.Router();

// Create a new patient
router.post('/', async (req, res) => {
  try {
    const patient = new Patient(req.body);
    await patient.save();
    res.status(201).json(patient);
  } catch (error) {
    res.status(400).json({ message: error instanceof Error ? error.message : 'An error occurred while creating the patient' });
  }
});

// Get all patients
router.get('/', async (req, res) => {
  try {
    const patients = await Patient.find();
    res.json(patients);
  } catch (error) {
    res.status(500).json({ message: error instanceof Error ? error.message : 'An error occurred while fetching patients' });
  }
});

// Get a single patient
router.get('/:id', async (req, res) => {
  try {
    const patient = await Patient.findById(req.params.id);
    if (!patient) {
      return res.status(404).json({ message: 'Patient not found' });
    }
    res.json(patient);
  } catch (error) {
    res.status(500).json({ message: error instanceof Error ? error.message : 'An error occurred while fetching the patient' });
  }
});

export default router; 