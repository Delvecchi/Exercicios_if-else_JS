console.log("Exercício 3")

let prompt = require("prompt-sync")();

let numero = parseInt(prompt("Informe um número inteiro: "))


if(numero > 0 ) {
    console.log("O número informado(" + numero +") é positivo")
} 
else if(numero == 0) {
    console.log("O número informado é o zero, um número neutro")
}
else {
    console.log("O número informado(" + numero +") é negativa")
}