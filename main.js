const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');

const person = require('./personController');
const user = require('./userController');

const db = require('./db');

var app = express();

dotenv.config();

app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.status(201).json({
    "saludo": "hola mundo cruel"
  });
});

app.post('/persona', person.add);
app.get('/persona', person.getAll);
app.delete('/persona/:uuid', person.delete);
app.get('/persona/:uuid', person.get);
app.put('/persona/:uuid', person.update);
app.post('/usuario', user.add);
app.post('/login', user.login);

app.listen(process.env.PORT, async () => {
  console.log(`Example app listening on port ${process.env.PORT}!`);
  conn = await db.ConnectDB();
});
