const uuid = require('uuid');
const perso = require('./persona');

var arreglo = []

exports.add = (req, res) => {
    conn.collection("contactos").insertOne({
        uuid: uuid.v4(),
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        telefono: req.body.telefono
    }).then(resp=>{
        console.log(resp.result);
        res.status(201).json({
            status: "registro agregado correctamente"
        })
    })
}

exports.getAll = (req, res) => {
    conn.collection("contactos").find({}).toArray().then(result=>{
        res.status(200).json({
            personas: perso.listar(result)
        })
    });
}

exports.delete = (req, res) => {
    conn.collection("contactos").deleteOne({uuid: req.params.uuid}).then(resp => {
        console.log(resp.result)
    })
    
    conn.collection("contactos").find({}).toArray().then(result=>{
        res.status(200).json({
            personas: perso.listar(result)
        })
    }) 
}

exports.get = (req, res) => {
    conn.collection("contactos").find({uuid: req.params.uuid}).toArray().then(result=>{
        res.status(200).json({
            personas: perso.listar(result)
        })
    });
}

exports.update = (req, res) => {
    conn.collection("contactos").updateOne({ uuid: req.params.uuid }, { 
        $set: {
            nombre: req.body.nombre,
            apellido: req.body.apellido,
            telefono: req.body.telefono
        }
    }).then(response=>{
        console.log(response.result)
    });

    conn.collection("contactos").find({}).toArray().then(result=>{
        res.status(200).json({
            personas: perso.listar(result)
        })
    }) 
}