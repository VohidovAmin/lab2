const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 5173;

app.use(bodyParser.json());

app.post('/', (req, res) => {
    console.log('Received data:', req.body);
    res.json({ message: 'Data received successfully' });
  });

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});