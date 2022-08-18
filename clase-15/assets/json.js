const json = `{"nombre":"Jordan Rendon", "edad": 22,"cedula":123,"habilidades": ["Html","Css","JS"]}`

const objJSON = JSON.parse(json)
console.table(objJSON)

objJSON.edad > 25 ? console.log('Es mayor') : console.log('Es menor')
