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