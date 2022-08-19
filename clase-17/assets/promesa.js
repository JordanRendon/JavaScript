const pedirNombre = new Promise((resolve,reject)=>{
    setTimeout(() => {
        let nombre = prompt('Ingrese su nombre')
        if(nombre.length > 0) {
            resolve(nombre)
        }else{
            reject('Algo salio mal')
        }
    }, 2000);

})

pedirNombre.then((result)=>{
    console.log(result)
}).catch(err=>console.log(err))