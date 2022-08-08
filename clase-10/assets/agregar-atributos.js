let titulos = document.querySelectorAll('h1')

// titulos[1].className='titulo'

for(let i = 0; i < titulos.length; i++){
    titulos[i].className='titulo'
}

titulos[1].id='titulo1'
titulos[2].id='titulo2'


console.log(titulos)

let imagen = document.getElementById('imagen')
imagen.setAttribute('src','https://cr00.epimg.net/radio/imagenes/2022/07/23/tendencias/1658532219_992504_1658533490_noticia_normal.jpg')

let enlace = document.querySelector('a')

enlace.setAttribute('href','https://www.google.com.co/')