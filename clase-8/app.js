let mascota = {
  nombre: 'Ayudante Santa',
  raza: 'Galgo',
  color: 'cafe',
  hambiento: true,
  ladrando: function (nombre,color) {
    this.nombre = nombre
    this.color=color
    return `El ${this.nombre} esta ladrando`
  },
}

console.log(mascota)
console.log(`${mascota.color} ${mascota.nombre}`)
// console.log(mascota.ladrando())

console.log(mascota.ladrando('Fitulais','gris'))
console.log(mascota)


let mascotas =[
    { nombre:'Roki', color:'Cafe'},
    {nombre:'Piolin', color:'Blanco'}
]
console.log(mascotas)