const express = require('express');
const path = require('path');

const app = express();
app.use(express.json());

let id = 2;
const bricks = [
  { id: 1, text: 'This is the first message' },
  { id: 2, text: 'This is the second message' }
];

app.get('/api/bricks', (req, res) => {
  res.json(bricks);
});

app.post('/api/bricks', (req, res) => {
  const body = req.body;
  id++;

  const newBrick = {
    id,
    text: body.text 
  }

  bricks.push(newBrick)

  res.json(newBrick);
});

app.use(express.static(path.join(__dirname, 'client/build')));
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});

app.listen(5000, () => {
  console.log('Server is running');
});