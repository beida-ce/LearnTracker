require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const educationRoutes = require('./routes/educationRoutes'); // BU ÇOK ÖNEMLİ

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// ROUTE KULLANIMI
app.use('/api/educations', educationRoutes);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log(`Server running on port ${PORT}`);
    app.listen(PORT);
  })
  .catch((err) => console.error(err));
