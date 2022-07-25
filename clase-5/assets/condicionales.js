
// Condiciones con un soolo if
let age=17;

if (age>=18) {
    console.log('Eres mayor de edad')
    document.write('Eres mayor de edad')
}

// Condicionales con if-else

if (age>=18) {
    console.log('Eres mayor de edad')
} else {
    console.log('Eres menos de edad')
}

// condicionales con switch

let personName='Yinier'

switch (personName) {
    case 'Yinier':
        console.log('Legusta el Free')
        break;
    case 'Estevenson' :
        console.log('es el monitor')
        break;
    default:
        console.log('Esta una persona')
        break;
}

// condicional con operador 

let personGenre = 'F'

personGenre == 'F'? console.log('Es una mujer'): console.log('Es un hombre')

// -----------------------------------------------------------------

let personAge = Number(prompt('Ingrese su edad'));

personAge > 18? console.log('Mayor a 18'): console.log('Menor a 18');

// ----------------------------------------------------------------------

let isHungry = true;
 isHungry ? console.log('Tenemos hambre'): console.log('Tenemos sueño');
