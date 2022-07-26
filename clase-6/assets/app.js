console.log('Conectado a ciclos for')

//CICLOS normal

for (let i = 0; i <=100; i++) { 
         console.log(i); 
} 

 //ciclo usando operador, donde pedimos que vaya de 2 en 2

 for (let i = 0; i <=100; i+=2) { 
    console.log(i); 
 } 

 //Ciclo con acumulador y contador


//  let cont=0,acum=0; for (let i = 0; i <=100; i++) { 
//    acum+=i     
//    console.log(i);  
// }
//  console.log(`El acumulador está en: ${acum}`) 

 //ciclo con MODO % //

 let cont=0,acum=0; for (let i = 0; i <=100; i++) {
    acum+=i 
    if (i%2==0) { 
    console.log(`El número ${i} es par`)
    }else { 
    console.log(`El número ${i} es impar`) 
  } }
  
  console.log(`El acumulador está en: ${acum}`)

  //ciclo con funcion flecha

  const isPair=(num)=>{
     if (num%2==0){ 
    console.log('El número es par') 
    }else {
       console.log('El número es impar')  
    } 
} 
isPair(121)



