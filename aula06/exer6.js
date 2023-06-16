const axios = require('axios')

const URL = "https://pokeapi.co/api/v2/pokemon/ditto"

const axiosAsync = async () => {
    await axios({ method: 'GET', url: URL })
        .then(pokeInfo => {
            const { name, stats } = pokeInfo.data
            console.log({name, stats})
        })
        console.log('Async')
}

const axiosSync = () => {
    axios({ method: 'GET', url: URL })
        .then(pokeInfo => {
            const { name, stats } = pokeInfo.data
            console.log({name, stats})
        })
        console.log('Sync')
}


axiosAsync()
axiosSync()