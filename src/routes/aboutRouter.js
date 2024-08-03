const express = require('express');
const { addAbout, getAbout } = require('../controllers/aboutController');
const aboutRouter = express.Router();

// Route to get all About data
aboutRouter.get('/', async (req, res) => {
  try {
    await getAbout(req, res); // Delegate to controller function
  } catch (error) {
    console.error('Error handling GET request for About:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Route to add new About data
aboutRouter.post('/new', async (req, res) => {
  try {
    await addAbout(req, res); // Delegate to controller function
  } catch (error) {
    console.error('Error handling POST request for About:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = aboutRouter;
