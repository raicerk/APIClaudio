const express = require('express');
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.status(201).json({
      "saludo": "hola mundo cruel"
  });
});

app.post('/suma', (req, res)=>{
    res.status(200).json({
        "resultado": parseInt(req.body.numero1) + parseInt(req.body.numero2) + parseInt(req.body.numero3)
    })
})

app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});
