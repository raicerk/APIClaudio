const mate = require("./matematicas")
var arreglo = []
exports.suma = (req, res)=>{
    arreglo.push(req.body.numero1)
    res.status(200).json({
        "resultado": mate.suma(parseInt(req.body.numero1), parseInt(req.body.numero2), parseInt(req.body.numero3))
    })
    console.log(arreglo)
}