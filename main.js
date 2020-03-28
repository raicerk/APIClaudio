const express = require('express');
const bodyParser = require('body-parser');

const control = require('./controller')

var app = express();

app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.status(201).json({
    "saludo": "hola mundo cruel"
  });
});

app.post('/persona', control.add);
app.get('/persona', control.getAll);
app.delete('/persona/:uuid', control.delete);
app.get('/persona/:uuid', control.get);

app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});
