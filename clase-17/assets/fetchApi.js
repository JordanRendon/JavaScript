
const name = 'colombia'
const url = `https://restcountries.com/v3.1/name/${name}`

// fetch(url).then(response=>response.json()).then(data=>console.log(data)).catch((err)=>console.log(err))


const paisApi = async (enlace) => {
    try {
        const response = await fetch(enlace)
        console.table(response)
        const data = await response.json()
    } catch (error) {
        console.log(error)
    }
}
paisApi(url)