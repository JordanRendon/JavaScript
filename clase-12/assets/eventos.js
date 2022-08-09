// document.body.addEventListener('onload',alert('hola'))


// document.querySelector('#boton').addEventListener('click', (e)=>{
//     alert(e.target.textContent)
// })
let age = document.querySelector('#age')
let boton = document.querySelector('button')

boton.addEventListener('click',()=>{
    alert(`su edad es: ${age.value}`)
})

