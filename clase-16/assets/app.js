// sessionStorage.setItem('id',123)

// console.log(sessionStorage.getItem('id'))

const usuario={
nombre: 'Jordan Rendon',
edad: 25,
correo: 'Jordan@gmail.com'
}

const jsonUsuario = JSON.stringify(usuario,undefined, 4)

localStorage.setItem(usuario.correo,jsonUsuario)

console.log(localStorage)