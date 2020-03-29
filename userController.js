

exports.add = (req, res) => {
    conn.collection("usuarios").insertOne({
        uuid: uuid.v4(),
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        telefono: req.body.telefono
    }).then(resp => {
        console.log(resp.result);
        res.status(201).json({
            status: "registro agregado correctamente"
        })
    })
}