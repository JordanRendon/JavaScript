console.log('conectado a break')

for (let index = 0; index < 5; index++) {

     if (index==2) {
        //console.log(index)
        break
     }
    console.log(index)
  
}

console.warn('Continue')

for (let index = 0; index < 5; index++) {
  if (index==2) {
    continue
  }
  console.log(index)
}
