const uuid = require('uuid');
const perso = require('./persona');

var arreglo = []

exports.add = (req, res) => {

    let contacto = {
        uuid: uuid.v4(),
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        telefono: req.body.telefono
    }

    conn.collection("contactos").insertOne(contacto, (err, response) =>{
        if (err) {
            res.status(400).json({
                status: err
            })
        }else{
            console.log(response.result);
            res.status(201).json({
                status: "registro agregado correctamente"
            })
        }
    });  
}

exports.getAll = (req, res) => {
    conn.collection("contactos").find({}).toArray((err,response)=>{
        res.status(200).json({
            personas: perso.listar(response)
        })
    });
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

exports.update = (req, res) => {
    let actualizado = {
        uuid: arreglo.filter(item => item.uuid == req.params.uuid)[0].uuid,
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        telefono: req.body.telefono
    }
    arreglo = arreglo.filter(item => item.uuid != req.params.uuid)
    arreglo.push(actualizado)
    res.status(200).json({
        personas: perso.listar(arreglo)
    })
}