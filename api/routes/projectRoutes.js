const express = require('express');
const router = express.Router();

const db = require('../../data/dbConfig');

router.get('/', async (req, res) => {
  try {
    const projects = await db("projects").orderBy("id");
    res.status(200).json(projects);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;