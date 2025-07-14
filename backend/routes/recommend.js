const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
  const userData = req.body;

  console.log('Received profile data:', userData);

  // Dummy response for now
  const recommendations = [
    { role: 'Data Scientist', confidence: 91 },
    { role: 'UX Designer', confidence: 86 },
    { role: 'Cloud Engineer', confidence: 82 }
  ];

  res.json({ recommendations });
});

module.exports = router;
