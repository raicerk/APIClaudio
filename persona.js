
exports.listar = arreglo => {
    return arreglo.map((item, i) => {
        return {
            index: i,
            uuid: item.uuid,
            nombre: item.nombre,
            apellido: item.apellido,
            telefono: item.telefono
        }
    })
}
