let numeros=[5,2,3,4,1,3]

console.log(numeros)
console.log(numeros.length)

console.warn('Ciclo para con vector')
for (let i = 0; i < numeros.length; i++) {
    console.log(numeros[i])
    
}

//crear for of

console.warn('For of')

for (const numero of numeros) {
    console.log(numero)
}

//crear for in

console.warn('For in')

for (const key in numeros) {
//    console.log(numeros[key])
   if (key==2) {
    console.log(numeros[key])
   }
}

console.warn('For aech')

numeros.forEach(element => {
    console.log(element)

})

