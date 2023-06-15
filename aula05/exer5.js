const axios = require('axios')
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
})

readline.question('Digite o CEP:', cep => {

  const URL = `https://viacep.com.br/ws/${cep}/json/`

  axios({ method: 'GET', url: URL })
    .then(cepInfo => console.log(cepInfo.data))
    .catch(error => console.log(error))

  readline.close()
})

