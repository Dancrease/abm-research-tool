const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');

const app = express();
const port = 3001; // backend port

app.use(cors());
app.use(bodyParser.json());

// Load users from JSON file
const usersFile = path.join(__dirname, 'data', 'users.json');

function loadUsers() {
  if (fs.existsSync(usersFile)) {
    const data = fs.readFileSync(usersFile);
    return JSON.parse(data);
  } else {
    console.log('users.json not found!');
    return [];
  }
}

app.post('/login', (req, res) => {
  const { username, password } = req.body;
  const users = loadUsers();

  const user = users.find(u => u.username === username && u.password === password);

  if (user) {
    res.json({ message: 'Login successful' });
  } else {
    res.status(401).json({ message: 'Invalid credentials' });
  }
});

// Start server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
