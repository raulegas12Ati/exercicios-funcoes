function distanciaPercorrida(tempo, velocidadeMedia){
    return tempo*velocidadeMedia
}

function combustivelGasto(tempo, velocidadeMedia){
    return distanciaPercorrida(tempo, velocidadeMedia)/12
}

let teste1 = combustivelGasto(10, 85)
let teste2 = combustivelGasto(2, 92)
let teste3 = combustivelGasto(22, 67)

console.log(`TESTE1 = ${teste1.toFixed(3)}`)
console.log(`TESTE2 = ${teste2.toFixed(3)}`)
console.log(`TESTE3 = ${teste3.toFixed(3)}`)