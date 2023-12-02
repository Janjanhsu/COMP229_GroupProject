const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 8081;

app.use(cors());
app.use(bodyParser.json());

let data = [
  { id: 1, name: 'John', score: 80 },
  { id: 2, name: 'Jane', score: 90 },
  // Add more initial data as needed
];

app.get('/api/data', (req, res) => {
  res.json(data);
});

app.post('/api/data', (req, res) => {
  const newItem = { ...req.body, id: Date.now() };
  data.push(newItem);
  res.json(newItem);
});

app.put('/api/data/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const updatedItemIndex = data.findIndex((item) => item.id === id);
  if (updatedItemIndex !== -1) {
    data[updatedItemIndex] = { ...req.body, id };
    res.json({ success: true });
  } else {
    res.status(404).json({ success: false, message: 'Item not found' });
  }
});

app.delete('/api/data/:id', (req, res) => {
  const id = parseInt(req.params.id);
  data = data.filter((item) => item.id !== id);
  res.json({ success: true });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
