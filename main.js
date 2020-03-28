const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');

const control = require('./controller')

var app = express();
dotenv.config();

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
app.put('/persona/:uuid', control.update);

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}!`);
});
