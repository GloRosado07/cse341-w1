const express = require('express');
const bodyParser = require('body-parser');
const professional = require('./routes/professional');

const app = express();

app.use(bodyParser.json());
app.use(express.static('public'));

app.use('/professional', professional);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
