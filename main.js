const express = require('express');
var bodyParser = require('body-parser');

const control = require('./controller')

var app = express();

app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.status(201).json({
      "saludo": "hola mundo cruel"
  });
});

app.post('/suma', control.suma)

app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});
