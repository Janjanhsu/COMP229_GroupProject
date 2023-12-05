const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const jwt = require('jsonwebtoken');
//const expressJwt = require('express-jwt');

const app = express();
const port = 8081;

// Use CORS middleware
app.use(cors({ origin: 'http://localhost:3000' }));

app.use(bodyParser.json());

// Secret key for signing JWTs
const secretKey = 'your-secret-key';

// Middleware to check JWT on protected routes
//app.use(
 // expressJwt({ secret: secretKey, algorithms: ['HS256'] }).unless({
   // path: ['/api/authenticate', '/api/register'], // Add public routes that don't require authentication
  //})
//);

let data = [
  { id: 1, name: 'John', score: 80 },
  { id: 2, name: 'Jane', score: 90 },
  // Add more initial data as needed
];

app.post('/api/authenticate', (req, res) => {
  // In a real application, you would validate the user's credentials here
  console.log('Received authentication request:', req.body);
  const { email, password } = req.body;

  // For simplicity, assume authentication is successful for any email and password
  if (email && password) {
    const token = jwt.sign({ email }, secretKey, { expiresIn: '1h' });
    res.json({ token });
  } else {
    res.status(401).json({ message: 'Authentication failed' });
  }
});

// New registration endpoint
app.post('/api/register', (req, res) => {
  // Registration logic here
  const { email, password } = req.body;

  // For simplicity, assume registration is successful for any email and password
  if (email && password) {
    res.json({ message: 'Registration successful' });
  } else {
    res.status(400).json({ message: 'Invalid registration data' });
  }
});

app.get('/api/data', (req, res) => {
  res.json(data);
});

// Protect routes using the express-jwt middleware
app.post('/api/data', (req, res) => {
  // Your route logic here
});

app.put('/api/data/:id', (req, res) => {
  // Your route logic here
});

app.delete('/api/data/:id', (req, res) => {
  // Your route logic here
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
