let correo = document.querySelector('#correo')
let contrasenia = document.querySelector('#contrasenia')
let boton = document.querySelector('#enviarLogin')

boton.addEventListener('click', () => {
  enviarDatos()
})

const enviarDatos = () => {
    let usuario = {
        correo: '',
        contrasenia:''
    }
    usuario.correo = correo.value
    usuario.contrasenia = contrasenia.value

    let jsonUsuario = JSON.stringify(usuario)
    
    localStorage.setItem(correo.value, jsonUsuario)

    alert('Se envio a localStorage')
    obtenerUsuario()
}

const obtenerUsuario = () =>{
let usuario = document.querySelector('#usuario')
let objUsuario=JSON.parse(localStorage.getItem('jordanre7991@gmail.com'))
usuario.innerHTML = objUsuario.correo
}