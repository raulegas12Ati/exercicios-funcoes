function consumoMedio(distancia, combustivelGasto){
    return distancia/combustivelGasto
}

let teste1 = consumoMedio(500, 35.0)
let teste2 = consumoMedio(2254, 124.4)
let teste3 = consumoMedio(4554, 464.6)

console.log(`${teste1.toFixed(3)} km/h`)
console.log(`${teste2.toFixed(3)} km/h`)
console.log(`${teste3.toFixed(3)} km/h`)