const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const app = express();
const PORT = 3000;

app.use(express.static('public'));
app.use(bodyParser.json());

app.post('/save-password', (req, res) => {
  const { password } = req.body;
  fs.appendFileSync('passwords.txt', password + '\n');
  res.json({ message: 'Saved successfully' });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
