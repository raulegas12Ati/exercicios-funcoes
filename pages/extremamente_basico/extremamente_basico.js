/*
crie uma função que receba 2 valores inteiros como parametros. Efetue
a soma de A e B e retorne o resultado.
Imprima dos três testes conforme exemplo apresentado a baixo. Não apresente mensagem
alguma além daquilo que esta sendo especificado. 
*/

function somar(valor1, valor2){
    return valor1 + valor2
}

let teste1 = somar(10, 9)
let teste2 = somar(-10, 4)
let teste3 = somar(15, -7)

console.log(`
X1 = ${teste1}
X2 = ${teste2}
X3 = ${teste3}`)