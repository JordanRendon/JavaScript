// try {
//     const nombre = 'Jordan'
//     const apellidos = 'Rendon Echavarria'
// const nombreCompleto = nombre + ' ' + apellidos

// console.log(nombreCompleto)
// } catch (error) {
//     console.log(error)
// }

const obtenerNumero = () =>{
    let num = prompt('Ingrese un numeero')
    try {
        if (num == '') throw 'Esta vacio'
        if (isNaN(num)) throw 'No es un numero'
        num = Number(num)
        if (num < 5) throw 'El numero es muy pequeño'
        if (num > 10) throw 'El numero es muy grande'
    } catch (error) {
        console.log(error)
    }
}

obtenerNumero()