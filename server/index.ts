const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

app.use(express.json());

app.post('/api/contact', (req, res) => {
  const { name, email, message } = req.body;

  console.log(`Name: ${name}, Email: ${email}, Message: ${message}`);

  res.json({
    message: `Thank you for your interest, ${name}!`,
  });
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server starts on port http://localhost:${PORT}`);
});
