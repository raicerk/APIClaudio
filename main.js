const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');

const person = require('./personController');
const user = require('./userController');
const secure = require('./seguridad');

const db = require('./db');

var app = express();

dotenv.config();

app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.status(201).json({
    "saludo": "hola mundo cruel"
  });
});

app.post('/persona', secure.protegida, person.add);
app.get('/persona', secure.protegida, person.getAll);
app.delete('/persona/:uuid', secure.protegida, person.delete);
app.get('/persona/:uuid', secure.protegida, person.get);
app.put('/persona/:uuid', secure.protegida, person.update);
app.post('/usuario', user.add);
app.post('/login', user.login);

app.listen(process.env.PORT, async () => {
  console.log(`Example app listening on port ${process.env.PORT}!`);
  conn = await db.ConnectDB();
});
