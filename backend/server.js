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
app.use(express.json()); 

app.get('/resolutions', (req,res)=>{
  res.status(200).send({ data });
});

app.post('/resolutions', (req,res)=>{
  const { id, isChecked } = req.body;
  updateJSON(id, isChecked)
    .then(()=>{
      res.status(200).send({ message: 'Resolution updated successfully' });
      console.log(`Resolution with ID ${id} updated to isChecked: ${isChecked}`);
    })
    .catch((error)=>{
      res.status(500).send({ message: 'Error updating resolution', error: error.message });
      console.error(`Error updating resolution with ID ${id}:`, error);
    });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

const updateJSON = async(id, isChecked)=>{
  const fs = require('fs').promises;
  const file = await fs.readFile('./data.json', 'utf8');
  const data = JSON.parse(file);
  const item = data.data.find(x => x.id === id);
  if(!item) throw new Error('Item not found');
  Object.assign(item, { isChecked });
  await fs.writeFile('./data.json', JSON.stringify(data, null, 2));
};