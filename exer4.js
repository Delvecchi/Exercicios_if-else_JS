console.log("Exercício 4")

let prompt = require("prompt-sync")();

let numero = parseInt(prompt("Informe um número inteiro: "))

let numero2 = numero % 2 
if(numero2 == 0 ) {
    console.log("O número informado(" + numero +") é par")
} else {
    console.log("O número informado(" + numero +") não é par")
}