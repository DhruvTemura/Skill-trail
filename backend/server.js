const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const recommendRoute = require('./routes/recommend');

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use('/api/recommend', recommendRoute);

app.listen(PORT, () => {
  console.log(`Backend running at http://localhost:${PORT}`);
});
