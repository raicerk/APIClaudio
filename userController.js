

exports.add = (req, res) => {

    let { usuario, contrasena, estado } = req.body

    conn.collection("usuarios").insertOne({
        usuario,
        contrasena,
        estado
    }).then(resp => {
        console.log(resp.result);
        res.status(201).json({
            status: "Usuario agregado correctamente"
        })
    })
}

exports.login = (req, res) => {
    let { usuario, contrasena } = req.body;
    conn.collection("usuarios").find({ usuario, contrasena, estado: true }).toArray().then(result => {
        res.status(200).json({
            result
        })
    });
}