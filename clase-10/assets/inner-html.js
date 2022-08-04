let skills = ['OnePiece','Black Clover','Demon Slayer','Naruto Shippuden']

let ul=document.querySelector('ul')

// ul.innerHTML = `<li> HTML </li>
// <li> CSS </li>
// <li> JavaScript </li>
// <li> Reac</li>`

let skillConcat= ''

for (let i = 0 ; i < skills.length ; i++){
skillConcat=skillConcat + `<li>${skills[i].toUpperCase()}</li>`
}

ul.innerHTML=skillConcat