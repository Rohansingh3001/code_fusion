import express from 'express';
import projectModel from '../models/project.model.js';

const router = express.Router();

router.post('/create', async (req, res) => {
  try {
    const { name, description } = req.body;
    if (!name || !description) {
      return res.status(400).json({ message: 'Name and description are required' });
    }

    const newProject = new projectModel({ name, description });
    await newProject.save();

    res.status(201).json(newProject);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
});

export default router;
