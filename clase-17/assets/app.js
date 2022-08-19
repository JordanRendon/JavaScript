//Funcion callback sincronica
const saludar = (nombrePersona) =>{
    console.log(`Hola ${nombrePersona}`)
}

const pedirNombre = (callBack) => {
 let nombre = prompt('Ingrese su nombre')
 callBack(nombre)
}

pedirNombre(saludar)