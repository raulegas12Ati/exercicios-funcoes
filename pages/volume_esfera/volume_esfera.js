function volumeEsfera(raio){
    let pi = 3.14159
    return (4/3)*pi*raio**3
}

let teste1 = volumeEsfera(3)
let teste2 = volumeEsfera(15)
let teste3 = volumeEsfera(1523)

console.log(`VOLUME1 = ${teste1.toFixed(3)}`)
console.log(`VOLUME2 = ${teste2.toFixed(3)}`)
console.log(`VOLUME3 = ${teste3.toFixed(3)}`)