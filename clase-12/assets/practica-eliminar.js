let lista = document.querySelector('#lista')

let elementos = document.querySelectorAll('.elemento')

// for (let i = 0; i < elementos.length; i++){
//     lista.removeChild(elementos[i])
// }

for (let i = 1; i <= 10; i++ ){
    
    let elemento = document.createElement('li')
    elemento.innerHTML=i
    lista.appendChild(elemento)
}

