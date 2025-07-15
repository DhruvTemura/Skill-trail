const express = require('express');
const router = express.Router();
const { spawn } = require('child_process');

router.post('/', (req, res) => {
  const userData = req.body;

  const pythonProcess = spawn('python', ['ml_model.py'], {
    cwd: __dirname + '/../'
  });

  let dataBuffer = '';

  pythonProcess.stdout.on('data', (data) => {
    dataBuffer += data.toString();
  });

  pythonProcess.stderr.on('data', (data) => {
    console.error(`Python error: ${data}`);
  });

  pythonProcess.on('close', (code) => {
    try {
      const recommendations = JSON.parse(dataBuffer);
      res.json(recommendations);
    } catch (err) {
      console.error('Error parsing Python response:', err);
      res.status(500).send('Internal Server Error');
    }
  });

  // Send user JSON to Python via stdin
  pythonProcess.stdin.write(JSON.stringify(userData));
  pythonProcess.stdin.end();
});

module.exports = router;
