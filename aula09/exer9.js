const _ = require('lodash')

const users = [
    { name: 'Rodrigo', age: 34},
    { name: 'João', age: 24},
    { name: 'Cecilia', age: 36},
    { name: 'Julia', age: 21}
]

console.log(_.sortBy(users, (name) => {
    return name.age
}))
