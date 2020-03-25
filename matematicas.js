
exports.suma = (...numeros) => {

    var resultado = 0;
    numeros.map(i=>{
        resultado = resultado + parseInt(i)
    })
    
    return resultado
}