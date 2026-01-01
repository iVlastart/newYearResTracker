const express = require('express');
const app = express();
const cors = require('cors');
const data = require('./data.json')
require('dotenv').config();
const port = process.env.PORT || 3000;
const corsOptions = {
    origin: process.env.ORIGIN || "http://localhost:5000"
};
app.use(cors(corsOptions));

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
}); 