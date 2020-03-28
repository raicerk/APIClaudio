const uuid = require('uuid');
const perso = require('./persona')

var arreglo = []

exports.add = (req, res) => {
    arreglo.push({
        uuid: uuid.v4(),
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        telefono: req.body.telefono
    })
    res.status(201).json({
        status: "registro agregado correctamente"
    })
}

exports.getAll = (req, res) => {
    res.status(200).json({
        personas: perso.listar(arreglo)
    })
}

exports.delete = (req, res) => {
    arreglo = arreglo.filter(item => item.uuid != req.params.uuid)
    res.status(200).json({
        personas: perso.listar(arreglo)
    })
}

exports.get = (req, res) => {
    res.status(200).json(arreglo.filter(item => item.uuid == req.params.uuid)[0])
}